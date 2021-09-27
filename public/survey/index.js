Survey
    .StylesManager
    .applyTheme("modern");

    var json = {
        pages: [
            {
               questions: [
                   {
                    type: "matrix",
                    name: "Quality",
                    title: "Please indicate if you agree or disagree with the following statements",
                    columns: [
                        {
                            value: 1,
                            text: "Strongly Disagree"
                        },{
                            value: 2,
                            text: "Disagree"
                        },{
                            value: 3,
                            text: "Neutral"
                        },{
                            value: 4,
                            text: "Agree"
                        },{
                            value: 5,
                            text: "Strongly Agree"
                        }
                    ],
                    rows: [
                        {
                            value: "impact",
                            text: "Was the impact positive towards the service?"
                        },{
                            value: "does what it claims",
                            text: "Was the quality of the service upto the mark?"
                        },{
                            value: "better then others",
                            text: "Service is better than other service in the market"
                        },{
                            value: "easy to use",
                            text: "Service is easy to use"
                        }
                    ]
                   }
               ]
        }
        ]
    };


    window.survey = new Survey.Model(json);

    
$("#surveyElement").Survey({model: survey});