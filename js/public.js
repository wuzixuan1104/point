$(function(){$(document).ready(function(){$("#nav-icon3").click(function(){$(this).toggleClass("open"),$("#r_menu_boxs").toggleClass("s_menu"),$("#menu_back").toggleClass("s_menu_b")})}),$("#r_menu_boxs").each(function(){var o=$(this);o.find("span").click(function(){$(this).toggleClass("s")})}),$(".login_boxs .icon-x").click(function(){$(".login_boxs").toggleClass("show")}),$(".login_boxs .show-reg").click(function(){$(".login_boxs").toggleClass("show-reg")}),$(".login_boxs .show-psw").click(function(){$(".login_boxs").toggleClass("show-psw")}),$("#login-btn").click(function(){$(".login_boxs").toggleClass("show")})});