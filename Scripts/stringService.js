app.factory('stringService', function(){
    return{
        processString: function (input){
            output = "";
            if(!input)
            {
                console.log("dsfsdf");
                output = input;
                return;
            }

            for(i=0;i < input.length; i++)
            {
                if(i > 0 && input[i] == input[i].toUpperCase())
                {
                    output += " ";

                }
                output += input[i];


            }
            return output;
        }
    };
})