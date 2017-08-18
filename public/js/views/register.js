require(['backbone', 'jquery', 'underscore', 'text!../../templates/views/register.html', 'css!../../css/register.css'], function(Backbone, $, _, registerTemplate) {
    console.log('This is registration page');
    var View = Backbone.View.extend({
        el: $('#middle-section'),
        events : {
            'change #sel1': 'sport',
            'change #sel2': 'category',
            'change #sel3': 'gender',
            'click #btn-click' : 'getRegistrationForm'
        },
        initialize: function () {
            host = 'http://10.22.19.208:8000/';
            this.render();
        },
        render: function () {
            this.register_compiled = _.template(registerTemplate);
            this.$el.append(this.register_compiled);
        },
        category: function () {
            if($('#sel2').val() == 'participant')
                $('#gender-selector').removeClass('hide');
            else
                $('#gender-selector').addClass('hide');
        },
        getRegistrationForm: function () {
            var sport = $('#sel1').val();
			var category = $('#sel2').val();
			var url;
			if (category == 'staff')
			{
			    switch(sport){
					case 'aquatics': url = host+'sport/'+sport+'/staff';break;
                    default: url="";
			    }
			}
			else{
				var gender = $('#sel3').val();
				switch(sport){
					case 'aquatics':
									if(gender == 'men')
										url = host+'sport/'+sport+'/men';
									else
										url = host+'sport/'+sport+'/women';
									break;
					default: url = "";
				}
			}
			if(url !== ""){
			    window.open(url, '_blank', config='titlebar=no, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
            }
            else
                alert("Registration form not available");
        }
    });
    var view = new View;
    return view;
});