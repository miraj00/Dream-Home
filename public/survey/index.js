Survey
    .StylesManager
    .applyTheme("modern");

    var json = {};


    window.survey = new Survey.Model(json);

    
$("#surveyElement").Survey({model: survey});