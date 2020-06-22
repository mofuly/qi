"use strict";
function render() {
    if (papers.length === 1)
        renderPaper(0);
}
function renderPaper(which) {
    var el = document.querySelector('.questions');
    var html = [];
    var questions = papers[which].questions;
    var ord = 1;
    for (var i = 0; i < questions.length; i++) {
        html.push("<div class=\"question\">\n               <div class=\"question-f\">\n                   <span>" + ord + "\u3001</span>\n                   <span id=\"question-f-" + ord + "\">\n                   </span >\n               </div >\n               <ul id=\"question-q-" + ord + "\">\n               </ul>\n            </div>");
        ord++;
    }
    el.innerHTML = html.join('');
    questions.forEach(function (v, i) {
        var question_f = document.getElementById("question-f-" + (i + 1));
        katex.render(v.f, question_f);
        html = [];
        if (v.q.length > 1) {
            v.q.forEach(function (vv, ii) {
                html.push("<li><span>" + (ii + 1) + "\u3001</span><span id=\"q-" + (i + 1) + "-" + (ii + 1) + "\"></span></li>");
            });
        }
        else {
            html.push("<li><span id=\"q-" + (i + 1) + "-1\"></span></li>");
        }
        var q = document.getElementById("question-q-" + (i + 1));
        q.innerHTML = html.join('');
        v.q.forEach(function (vv, ii) {
            var el = document.getElementById("q-" + (i + 1) + "-" + (ii + 1));
            katex.render(vv, el);
        });
    });
}
render();
