function post_to_slack(){
  console.log("hello")

  var whurl = submit_form.webhookURL.value; // Webhook URL
  var ch = submit_form.channel.value.split(" ");  //channel
  var name = submit_form.usr_name.value; //username
  var text = submit_form.content.value; // Text to post

//  var file = fs.OpenTextFile("./webhook.txt", 9);

//  var whurl = ReadLine();

  //channelごとに毎度送信
  for(i = 0; i < ch.length; i++){
    $.ajax({
      data: 'payload=' + JSON.stringify({
        "channel": ch[i],
        "username": name,
        "text": text
      }),
      dataType: 'json',
      processData: false,
      type: 'POST',
      url: whurl,
      success: function (data) {
        alert( 'Can I post to Slack? :' + data.ok );
      }
    });
  }
}
