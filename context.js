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

var cardpart=  [[0, 5], [5, 10], [10, 15], [15, 20],
		[20, 25], [25, 30], [30, 35], [35, 38],
		[38, 43], [43, 46], [46, 51], [51, 56],
		[56, 61], [61, 66], [66, 71]];

var hiragana=  ["あ", "い", "う", "え", "お",
		"か", "き", "く", "け", "こ",
		"さ", "し", "す", "せ", "そ",
		"た", "ち", "つ", "て", "と",
		"な", "に", "ぬ", "ね", "の",
		"は", "ひ", "ふ", "へ", "ほ",
		"ま", "み", "む", "め", "も",
		"や", "ゆ", "よ",
		"ら", "り", "る", "れ", "ろ",
		"わ", "を", "ん",
		"が", "ぎ", "ぐ", "げ", "ご",
		"ざ", "じ", "ず", "ぜ", "ぞ",
		"だ", "ぢ", "づ", "で", "ど",
		"ば", "び", "ぶ", "べ", "ぼ",
		"ぱ", "ぴ", "ぷ", "ぺ", "ぽ"];

var katakana=  ["ア", "イ", "ウ", "エ", "オ",
		"カ", "キ", "ク", "ケ", "コ",
		"サ", "シ", "ス", "セ", "ソ",
		"タ", "チ", "ツ", "テ", "ト",
		"ナ", "ニ", "ヌ", "ネ", "ノ",
		"ハ", "ヒ", "フ", "ヘ", "ホ",
		"マ", "ミ", "ム", "メ", "モ",
		"ヤ", "ユ", "ヨ",
		"ラ", "リ", "ル", "レ", "ロ",
		"ワ", "ヲ", "ン",
		"ガ", "ギ", "グ", "ゲ", "ゴ",
		"ザ", "ジ", "ズ", "ゼ", "ゾ",
		"ダ", "ヂ", "ヅ", "デ", "ド",
		"バ", "ビ", "ブ", "ベ", "ボ",
		"パ", "ピ", "プ", "ペ", "ポ"];

var cardset_q= hiragana;

var cardset_a= ["a", "i", "u", "e", "o",
		"ka", "ki", "ku", "ke", "ko",
		"sa", "shi", "su", "se", "so",
		"ta", "chi", "tsu", "te", "to",
		"na", "ni", "nu", "ne", "no",
		"ha", "hi", "fu", "he", "ho",
		"ma", "mi", "mu", "me", "mo",
		"ya", "yu", "yo",
		"ra", "ri", "ru", "re", "ro",
		"wa", "wo", "n",
		"ga", "gi", "gu", "ge", "go",
		"za", "ji", "zu", "ze", "zo",
		"da", "ji", "zu", "de", "do",
		"ba", "bi", "bu", "be", "bo",
		"pa", "pi", "pu", "pe", "po"];

var cardsound_a=["a.mp3", "i.mp3", "u.mp3", "e.mp3", "o.mp3",
		"ka.mp3", "ki.mp3", "ku.mp3", "ke.mp3", "ko.mp3",
		"sa.mp3", "shi.mp3", "su.mp3", "se.mp3", "so.mp3",
		"ta.mp3", "chi.mp3", "tsu.mp3", "te.mp3", "to.mp3",
		"na.mp3", "ni.mp3", "nu.mp3", "ne.mp3", "no.mp3",
		"ha.mp3", "hi.mp3", "fu.mp3", "he.mp3", "ho.mp3",
		"ma.mp3", "mi.mp3", "mu.mp3", "me.mp3", "mo.mp3",
		"ya.mp3", "yu.mp3", "yo.mp3",
		"ra.mp3", "ri.mp3", "ru.mp3", "re.mp3", "ro.mp3",
		"wa.mp3", "wo.mp3", "n.mp3",
		"ga.mp3", "gi.mp3", "gu.mp3", "ge.mp3", "go.mp3",
		"za.mp3", "ji.mp3", "zu.mp3", "ze.mp3", "zo.mp3",
		"da.mp3", "ji.mp3", "zu.mp3", "de.mp3", "do.mp3",
		"ba.mp3", "bi.mp3", "bu.mp3", "be.mp3", "bo.mp3",
		"pa.mp3", "pi.mp3", "pu.mp3", "pe.mp3", "po.mp3"];

