let translator =  undefined;
let onlineURL = "https://ishyiga-variable-transilator.herokuapp.com/"
let localURL = "http://localhost:8085/"
let usingURL = onlineURL

let language = undefined;

$(document).ready(function() {
    let sendMessage = (message) =>{
        $("#messageDivision").html(`
        <div> <div class="text-primary">status message</div>
        <div class="alert alert-warning" role="alert">
                        ${message}
                    </div>
        </div>
            
            `);

    }

    let cleanSelector = ()=>{
        $("#selectVariableName").empty();
        $("#selectVariableName").append(`<option value="All">
                                       ${"All"}
                                  </option>`);
    }

    let fetchData = () =>{
        sendMessage("fetching...");
        $.get(
            usingURL+'translator',
            "",

            function (response, status) {

                translator = response['_embedded']['translation']

                let output = '' +
                    '<table class="table">' +
                    '  <thead>' +
                    '    <tr>' +
                    '      <th scope="col">#</th>' +
                    '      <th scope="col">kinyarwanda</th>' +
                    '      <th scope="col">English</th>' +
                    '      <th scope="col">french</th>' +
                    '      <th scope="col">kiswahili</th>' +
                    '    </tr>' +
                    '  </thead>' +
                    '  <tbody>' +
                    '';
                cleanSelector();
                let rows = translator.map(each => {
                    $("#selectVariableName").append(`<option value="${each.v_name}">
                                       ${each.v_name}
                                  </option>`);
                    return '' +
                        '<tr>' +
                        '      <th scope="row">'+each.v_name+'</th>' +
                        '      <td>'+each.kinyarwanda+'</td>' +
                        '      <td>'+each.english+'</td>' +
                        '      <td>'+each.french+'</td>' +
                        '      <td>'+each.kiswahili+'</td>' +
                        '    </tr>' +
                        ''

                });
                rows.map(each =>{
                    output += each;
                })
                output +='</tbody></table>'

                $('#outputDiv').html(output);

                sendMessage("Done");
            }
        );
    }
    fetchData();
        $('#getData').click(function (e) {
            $("#outputDiv").html("fetch");

            let variableN = $("#selectVariableName").val();
            const language = $("#selectLanguage").val();
            if(variableN === "All" && language === "All"){
                sendMessage("Fetching..");
                $.get(
                    usingURL+'translator',
                    "",

                    function (response, status) {

                        let translator = response['_embedded']['translation']


                        let output = '' +
                            '<table class="table">' +
                            '  <thead>' +
                            '    <tr>' +
                            '      <th scope="col">#</th>' +
                            '      <th scope="col">kinyarwanda</th>' +
                            '      <th scope="col">English</th>' +
                            '      <th scope="col">french</th>' +
                            '      <th scope="col">kiswahili</th>' +
                            '    </tr>' +
                            '  </thead>' +
                            '  <tbody>' +
                            '';
                        let rows = translator.map(each => {
                            return '' +
                                '<tr>' +
                                '      <th scope="row">'+each.v_name+'</th>' +
                                '      <td>'+each.kinyarwanda+'</td>' +
                                '      <td>'+each.english+'</td>' +
                                '      <td>'+each.french+'</td>' +
                                '      <td>'+each.kiswahili+'</td>' +
                                '    </tr>' +
                                ''

                        });
                        rows.map(each =>{
                            output += each;
                        })
                        output +='</tbody></table>'

                        $('#outputDiv').html(output);

                        sendMessage("Done");
                    }
                );
            }
            else if(variableN=== "All" && language !== "All"){
                sendMessage("Fetching...");
                $.get(
                    usingURL+'translator',
                    "",

                    function (response, status) {

                        translator = response['_embedded']['translation']


                        let output = '' +
                            '<table class="table">' +
                            '  <thead>' +
                            '    <tr>' +
                            '      <th scope="col">#</th>' +
                            '      <th scope="col">'+language.toLowerCase()+'</th>' +
                            '    </tr>' +
                            '  </thead>' +
                            '  <tbody>' +
                            '';
                        let rows = translator.map(each => {
                            return '' +
                                '<tr>' +
                                '      <th scope="row">'+each.v_name+'</th>' +
                                '      <td>'+each[language.toLowerCase()]+'</td>' +
                                '    </tr>' +
                                ''

                        });
                        rows.map(each =>{
                            output += each;
                        })
                        output +='</tbody></table>'

                        $('#outputDiv').html(output);

                        sendMessage("Done");
                    }
                );
            }
            else if(variableN!== "All" && language==="All"){
                let output = '' +
                    '<table class="table">' +
                    '  <thead>' +
                    '    <tr>' +
                    '      <th scope="col">#</th>' +
                    '      <th scope="col">kinyarwanda</th>' +
                    '      <th scope="col">English</th>' +
                    '      <th scope="col">french</th>' +
                    '      <th scope="col">kiswahili</th>' +
                    '    </tr>' +
                    '  </thead>' +
                    '  <tbody>' +
                    '';
                let data = undefined;
                translator.map(each => {
                    if(each.v_name === variableN){
                        data = each
                    }
                })
                if(data){
                    output+=
                        '<tr>' +
                        '      <th scope="row">'+data.v_name+'</th>' +
                        '      <td>'+data.kinyarwanda+'</td>' +
                        '      <td>'+data.english+'</td>' +
                        '      <td>'+data.french+'</td>' +
                        '      <td>'+data.kiswahili+'</td>' +
                        '    </tr>' +
                        ''
                    $("#outputDiv").html(output);
                }

            }
            else if(variableN!=="All" && language!=="All"){
                let data = undefined;
                translator.map(each => {
                    if(each.v_name === variableN){
                        data = each
                    }
                })
                if(data){
                    $("#outputDiv").html('' +
                        `<div class="container-fluid">
                        <div class="row">
                        <div class="col">
                        <li class="list-group-item">
                        ${data.v_name}
                        </li>
                        </div>
                        <div class="col">
                        <li class="list-group-item">
                        ${data[language.toLowerCase()]}
                        </li>
                        </div>
                        </div>
                        </div>
                        
                        `)
                }
            }


        });
    putData
    $('#putData').click(e =>{
        let data = {

            v_name: $("#exampleInputvariable").val().toLowerCase(),
            kinyarwanda:$("#exampleInputKinyarwanda").val().toLowerCase(),
            english:$("#exampleInputEnglish").val().toLowerCase(),
            french:$("#exampleInputFrench").val().toLowerCase(),
            kiswahili:$("#exampleInputKiswahili").val().toLowerCase()
        }
        let i;
        let link;
        for(i=0; i<translator.length; i++ ){
            if(translator[i].v_name === data.v_name){
                link = translator[i]._links.self.href;
                break;
            }
        }
        if(data.v_name === "" || data.kinyarwanda ===""||data.english === "" || data.french === "" || data.kiswahili === ""){
            alert("fill all form input ")
            return
        }
        sendMessage("sending data ...");
        $.ajax({
            "url": link,
            "type": "put",
            statusCode: {
                409: function(responseObject, textStatus, jqXHR) {
                    alert(data.v_name + "was already exist")
                },
                503: function(responseObject, textStatus, errorThrown) {
                    // Service Unavailable (503)
                    alert("Service Unavailable (503)")
                    // This code will be executed if the server returns a 503 response
                }
            },
            headers:{
                "Content-Type":"application/json"
            },
            "data": JSON.stringify(data)
        }).done(function(results){
            fetchData();

            sendMessage("finish updating");
        });
    });
        $('#postData').click(e =>{

            let data = {
                v_name: $("#exampleInputvariable").val().toLowerCase(),
                kinyarwanda:$("#exampleInputKinyarwanda").val().toLowerCase(),
                english:$("#exampleInputEnglish").val().toLowerCase(),
                french:$("#exampleInputFrench").val().toLowerCase(),
                kiswahili:$("#exampleInputKiswahili").val().toLowerCase()
            }
            if(data.v_name === "" || data.kinyarwanda ===""||data.english === "" || data.french === "" || data.kiswahili === ""){
                alert("fill all form input")
                return
            }
            sendMessage("Saving...");
            $.ajax({
                "url": usingURL+"translator",
                "type": "post",
                statusCode: {
                    409: function(responseObject, textStatus, jqXHR) {
                        alert(data.v_name + "was already exist")
                    },
                    503: function(responseObject, textStatus, errorThrown) {
                        // Service Unavailable (503)
                        alert("Service Unavailable (503)")
                        // This code will be executed if the server returns a 503 response
                    }
                },
                headers:{
                    "Content-Type":"application/json"
                },
                "data": JSON.stringify(data)
            }).done(function(results){
                sendMessage("Done");
                fetchData()
                console.log(results);
            });
        });

});