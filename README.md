<!DOCTYPE html>
<!-- Copyright 2014, 2015 Daniel Nikpayuk
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
-->
<html lang="ja">
 <head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="semiotics.css" type="text/css" media="screen">
  <title>Hiragana-Katakana</title>
 </head>
 <body>
<!--id="debug" is here for debugging purposes"-->
  <div style="height: 20px; margin: 0 0 0 0; float: left; font-size: 12px;" id="debug"></div>
  <div id="main_area">
   <div id="options_area">
    <span class="button" id="shuffle">shuffle</span>
    <span class="button" id="repeat">repeat</span>
    <span class="button" id="invert">invert</span>
    <span class="button" id="mute">mute</span>
    <span class="button" id="toggle">ひらがな</span>
   </div>
   <div id="screen_area">
    <span id="screen"></span>
    <span id="index"></span>
    <span class="button" id="all">all</span>
    <span class="button" id="reshuffle">reshuffle</span>
   </div>
   <div id="card_area">
    <span class="button" id="vowels">vowels</span>
    <span class="button" id="k_syllables">k</span>
    <span class="button" id="s_syllables">s</span>
    <span class="button" id="t_syllables">t</span>
    <span class="button" id="n_syllables">n</span>
    <span class="button" id="h_syllables">h</span>
    <span class="button" id="m_syllables">m</span>
    <span class="button" id="y_syllables">y</span>
    <span class="button" id="r_syllables">r</span>
    <span class="button" id="wn_syllables">w,n</span>
    <span class="button" id="g_syllables">g</span>
    <span class="button" id="z_syllables">z</span>
    <span class="button" id="d_syllables">d</span>
    <span class="button" id="b_syllables">b</span>
    <span class="button" id="p_syllables">p</span>
   </div>
  </div>
  <script type="text/javascript" src="context.js"></script>
  <script type="text/javascript" src="semiotics.js"></script>
  <script type="text/javascript" src="media.js"></script>
  <script type="text/javascript">

start();

</script>
 </body>
</html>
