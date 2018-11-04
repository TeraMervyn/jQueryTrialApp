$(document).ready(
    function(){
        $('body').append(
            $('<div/>').addClass('main')
                .attr({
                    id: 'body',
                    title: 'Welcome to the jQuery App'
                })
                .text(
                    "This is the jQuery app, feel free!"
                )
        );
    },

    function(){
        $('div').addElement('button')
            .attr({
                id: 'btn1',
                title: "click me"
            })
            .text(
                "Click Me"
            )
    },

    function(){
        $('a').click(
            function(event){
                var node = $(this);

                var target = node.attr('target');
                var href = node.attr('href');

                if (target === undefined && href !== undefined){
                    switch(true){
                        case href.indexOf('http://') !== -1:
                        case href.indexOf('https://') !== -1:
                        case href.indexOf('.pdf') !== -1: {
                            node.attr('target','_blank')
                                .addClass('LinksExample')
                        break;
                        }
                    }
                }
            }
        )
    },


);

var contactNewsLetterForm = {
    ready: function(){
        $('input#contactNewsLetterFormSubmit').click(function(event){
            var input = $('this');
            input.attr('disabled', true);

            if(!contactNewsLetterForm.validate()){
                alert("Please provide both first and last name");
                input.removeAttr('disabled');
                event.preventDefault();
            } else{
                $('form#contactNewsLetterForm').submit();
            }
        });
    }
},

validate : function(){
    
    var hasRequiredValues = true;
    $('form#contactNewsLetterForm').find('input, select, textarea').each(function(){
        var node = $('this');
        
        if (node.is('[required]')){
            var value = node.val();

            if(!value){
                hasRequiredValues = false;
                return false;
            }
        }
    });
    return hasRequiredValues;
};

$(document).ready(
    function(){
        contactNewsLetterForm.ready();
    }
);