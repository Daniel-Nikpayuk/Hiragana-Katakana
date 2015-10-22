/* Copyright 2014, 2015 Daniel Nikpayuk
This file is part of Hiragana-Katakana.

    Hiragana-Katakana is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Hiragana-Katakana is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with Hiragana-Katakana.  If not, see <http://www.gnu.org/licenses/>.
*/

var shuffle_button=document.querySelector('#shuffle');
var repeat_button=document.querySelector('#repeat');
var invert_button=document.querySelector('#invert');
var mute_button=document.querySelector('#mute');
var toggle_button=document.querySelector('#toggle');
var screen_label=document.querySelector('#screen');
var index_label=document.querySelector('#index');
var reshuffle_button=document.querySelector('#reshuffle');
var all_button=document.querySelector('#all');
var card_buttons=document.querySelectorAll('#card_area .button');

var is_shuffled;
var is_repeated;
var is_inverted;
var is_muted;
var is_toggled;
var is_active;
var is_all;

var cardset;
var shuffle;
var soundset_a;

// [0] card
// [1] side
var current;

//////////////////////////////////////////////////////////////////////////////////////

function error_msg()
{
}

//////////////////////////////////////////////////////////////////////////////////////

function rep(v, n)
{
	var r=new Array();
	for (var k=0; k < n; ++k) r.push(v);

	return r;
}

function seq(b, e)
{
	var s=new Array();
	if (b > e) for (var k=b; k > e; --k) s.push(k);
	else for (var k=b; k < e; ++k) s.push(k);

	return s;
}

function identity(n)
{
	return seq(0, n);
}

function rand(n) { return Math.floor(Math.random()*n); }
function cut(a, n) { return a.slice(0,n).concat(a.slice(n+1, a.length)); }

function reshuffle(n)//unsafe for n < 0.
{
	var id=identity(n);
	var sh=new Array();
	for (var k=n, pos=rand(n); k > 0; pos=rand(--k))
	{
		sh.push(id[pos]);
		id=cut(id, pos);
	}

	return sh;
}

function recard()//returns a new shuffler.
{
	cardset=new Array();
	for (var k=0; k < is_active.length; ++k) if (is_active[k])
	{
		var i=cardpart[k];
		cardset=cardset.concat(seq(i[0], i[1]));
	}
	
	return reshuffle(cardset.length);
}

function resound()
{
	soundset_a=new Array();
	for (var k=0; k < cardsound_a.length; ++k) soundset_a.push(new Audio("audio/"+cardsound_a[k]));
}

//////////////////////////////////////////////////////////////////////////////////////

function initialize()
{
	is_shuffled=false;
	is_repeated=false;
	is_inverted=false;
	is_muted=false;
	is_toggled=false;

	is_active=rep(false, cardpart.length);
	is_all=false;
	shuffle=recard();
	resound();
	current=[-1, 1];
}

//////////////////////////////////////////////////////////////////////////////////////

function update_shuffle()
{
	if (is_shuffled) shuffle_button.setAttribute("style", "background: #BD1717; color: white;");
	else shuffle_button.setAttribute("style", "background: white; color: #BD1717;");
}

function update_repeat()
{
	if (is_repeated) repeat_button.setAttribute("style", "background: #BD1717; color: white;");
	else repeat_button.setAttribute("style", "background: white; color: #BD1717;");
}

function update_invert()
{
	if (is_inverted) invert_button.setAttribute("style", "background: #BD1717; color: white;");
	else invert_button.setAttribute("style", "background: white; color: #BD1717;");
}

function update_mute()
{
	if (is_muted) mute_button.setAttribute("style", "background: #BD1717; color: white;");
	else mute_button.setAttribute("style", "background: white; color: #BD1717;");
}

function update_toggle()
{
	if (is_toggled)
	{
		toggle_button.setAttribute("style", "background: #BD1717; color: white;");
		toggle_button.innerHTML="カタカナ";
		cardset_q=katakana;
	}
	else
	{
		toggle_button.setAttribute("style", "background: white; color: #BD1717;");
		toggle_button.innerHTML="ひらがな";
		cardset_q=hiragana;
	}
}

function update_index(c)
{
	if (c == 0) index_label.innerHTML="start";
	else if (c == 1) index_label.innerHTML="end";
	else if (c == 2) index_label.innerHTML=(current[0]+1)+"/"+cardset.length+": Q";
	else if (c == 3) index_label.innerHTML=(current[0]+1)+"/"+cardset.length+": A";
	else error_msg();
}

function update_screen(c, p)
{
	if (c == 0)
	{
		screen_label.setAttribute("style", "font-style: normal; font-family: Arial; font-size: 48px;");
		screen_label.innerHTML="Press right arrow...";
	}
	else if (c == 1)
	{
		screen_label.setAttribute("style", "font-style: italic; font-family: Arial; font-size: 48px;");
		screen_label.innerHTML=is_repeated ? "again?" : "fin.";
	}
	else if (c == 2)
	{
		screen_label.setAttribute("style", "font-style: normal; font-family: IPAMincho; font-size: 400px;");
		screen_label.innerHTML=cardset_q[p];
	}
	else if (c == 3)
	{
		screen_label.setAttribute("style", "font-style: normal; font-family: Arial; font-size: 300px;");
		screen_label.innerHTML=cardset_a[p];
	}
	else error_msg();
}

function update_audio(c, p)
{
	if (c == 0 || c == 1);//do nothing.
	else if (c == 2);//do nothing.
	else if (c == 3) soundset_a[p].play();
	else error_msg();
}

//	[0] begin
//	[1] end
//	[2] question
//	[3] answer
function update_screen_area()
{
	var current_case;
	if (current[0] < 0) current_case=0;
	else if (current[0] >= cardset.length) current_case=1;
	else if (current[1] == 0) current_case=is_inverted ? 3 : 2;
	else current_case=is_inverted ? 2 : 3;

	var pos=current[0];
	if (is_shuffled) pos=shuffle[pos];
	pos=cardset[pos];

	update_index(current_case);
	update_screen(current_case, pos);
	if (!is_muted) update_audio(current_case, pos);
}

function update_active(p)
{
	if (is_active[p]) card_buttons[p].setAttribute("style", "background: #BD1717; color: white;");
	else card_buttons[p].setAttribute("style", "background: white; color: #BD1717;");
}

function update_all()
{
	if (is_all)
	{
		all_button.setAttribute("style", "background: #BD1717; color: white;");
		all_button.innerHTML="none";
	}
	else
	{
		all_button.setAttribute("style", "background: white; color: #BD1717;");
		all_button.innerHTML="all";
	}

	for (var k=0; k < is_active.length; ++k) update_active(k);
}

