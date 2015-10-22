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

function start()
{
	initialize();
	update_screen_area();
}

function restart()
{
	current=[-1, 1];
	update_screen_area();
}

function reset(c=[-1,1])
{
	shuffle=recard();
	current=c;
	update_screen_area();
}

//////////////////////////////////////////////////////////////////////////////////////

function dec_current()
{
	if (current[0] < 0);//do nothing.
	else if (current[1] == 1) current[1]=0;
	else if (-1 < current[0]) current=[current[0]-1, 1];
}

function inc_current()
{
	if (current[0] >= cardset.length)
	{
		if (is_repeated) reset([0,0]);
	}
	else if (current[1] == 0) current[1]=1;
	else if (current[0] < cardset.length) current=[current[0]+1, 0];
}

//////////////////////////////////////////////////////////////////////////////////////

function prev()
{
	dec_current();
	update_screen_area();
}

function next()
{
	inc_current();
	update_screen_area();
}

//////////////////////////////////////////////////////////////////////////////////////

function atclick(n)
{
	return function(e)
	{
		is_active[n]=!is_active[n];
		update_active(n);
		reset();
	};
}

shuffle_button.onclick=function(e) { is_shuffled=!is_shuffled; update_shuffle(); restart(); }
repeat_button.onclick=function(e) { is_repeated=!is_repeated; update_repeat(); restart(); }
invert_button.onclick=function(e) { is_inverted=!is_inverted; update_invert(); restart(); }
mute_button.onclick=function(e) { is_muted=!is_muted; update_mute(); }
toggle_button.onclick=function(e) { is_toggled=!is_toggled; update_toggle(); update_screen_area(); }

reshuffle_button.onclick=function(e) { reset(); }
all_button.onclick=function(e) { is_all=!is_all; is_active=rep(is_all, is_active.length); update_all(); reset(); }

for (var k=0; k < card_buttons.length; ++k) card_buttons[k].onclick=atclick(k);

document.onkeydown=function(e)
{
	e=e || window.event;
	switch(e.which || e.keyCode)
	{
		case 37: //left
			prev();
		break;
		case 38: //up
		break;
		case 39: //right
			next();
		break;
		case 40: //down
		break;
		default: return;
	}
	e.preventDefault();
}

