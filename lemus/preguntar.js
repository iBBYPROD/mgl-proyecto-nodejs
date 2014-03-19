function ask(question, format, callback) {

 var stdin = process.stdin, stdout = process.stdout;

 

 stdin.resume();

 stdout.write(question + ": ");

 

 stdin.once('data', function(data) {

   data = data.toString().trim();

 

   if (format.test(data)) {

     callback(data);

   } else {

     stdout.write("It should match: "+ format +"\n");

     ask(question, format, callback);

   }

 });

}
ask("Name", /.+/, function(name) {

  ask("Email", /^.+@.+$/, function(email) {

    console.log("Your name is: ", name);

    console.log("Your email is:", email);

 

    process.exit();

  });

});
