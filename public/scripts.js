function initEasterEggs(){$(".footer-copyright-stars").click(function(){$("footer").velocity("scroll",{duration:500,axis:"y",begin:function(){$("footer").addClass("is-egg")}})})}$(document).ready(function(){console.log("Looking for this? https://github.com/BraveUX/website"),initEasterEggs()});