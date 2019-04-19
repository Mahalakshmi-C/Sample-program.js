var a=1;
function outer()
{
 var b=2;
   function inner()
      { 
          var c=3;
          return (a*b*c);
      }
    return inner();
}
outer();

