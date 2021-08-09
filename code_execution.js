// there is no main function present in the jS



/* -------------------------------WORKING ON "VAR" ----------------------- */




console.log(global);



/*Execution context -> code + environment(global) + JS(this)
phases while execution of code:

// 1. creation phase: in this phase memory allocation takes place :-
        -> memory allocation is also know as "HOISTING"

        -> for variables -> undefined.
        -> for functions -> memory allocation.
 // 2. code execution 
        -> code execution takes place from left to right anf top to bottom */


        // phle  variables and functions ki memory allocate hojati h, then code execute hota hai

        console.log(a); // when we are trying to print  a, b without even declaring it then it will show undefined.
        console.log(b);
        
        var a;
        var b;
        a = 10 ;
        b=[ 1,2,3,4,5];
        console.log(a);// here we are printing a , b after declaring them and also assigning values to them.
        console.log(b);



        fn(); // when ever a function is called "execution context" will be formed every time.
            // function me agar kahi variable declared nhi h to fnction bhar se variable ki value utha lega.
        function fn() {

            console.log(a);
            // var a = 1;
            console.log( " ty for the call" , a);
            console.log("thankyou for calling me!");
        }
        fn();
        console.log("***********************");
            /*  outer environment -> lexical scope
                outer environment is defined be where is the function definition exits*/ 

        var varName = 1; 
        function a(){
            console.log(varName);
        }
        function b(){
            var varName = 2;
            a();
        }
        // b();



        //************************ */

        console.log("***************************************");


        var a =10;
        function fn(){
            var a = 20;
            a++;
            console.log(a);
            if(true){
                var a = 30;
                a++;
                console.log(a);
            }
            console.log(a)
        }
        console.log(a);
        fn();
        console.log(a);
/* output of this code will be:
10
21
31
31
10
*/

