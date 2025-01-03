
function quiz(){

  //  NUMERACY QUIZ SCORES
    
   ab = document.getElementsByName('Nq1');
   for (i = 0; i < ab.length; i++) {
   if (ab[i].checked)
   document.getElementById('Nb1').innerHTML
    =  ab[i].value;
    
    
if(document.getElementById('Nb1').innerHTML 
      != '36')
{
document.getElementById('Q1').innerHTML 
   = "X"; 
    
document.getElementById('Q1').style.color
= 'red';       
      document.getElementById('N1').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q1').innerHTML 
   = "✓";
    
document.getElementById('Q1').style.color
= "purple";       
      document.getElementById('N1').innerHTML  
    = "5";

} 
    } 

be = document.getElementById('NQ2');
 document.getElementById('Nb2').innerHTML 
        = be.value;  
  if(be.value != '40')
{
document.getElementById('Q2').innerHTML 
   = "X";
    
document.getElementById('Q2').style.color
= 'red';       
      document.getElementById('N2').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q2').innerHTML 
   = "✓";
    
document.getElementById('Q2').style.color
= "purple";       
      document.getElementById('N2').innerHTML  
    = "5";

} 

    
af = document.getElementsByName('Nq3');
  for (i = 0; i < af.length; i++) {
   if (af[i].checked)
   document.getElementById('Nb3').innerHTML
    =  af[i].value;

      
if(document.getElementById('Nb3').innerHTML 
    != '12')
            
{
document.getElementById('Q3').innerHTML 
   = "X"; 
    
document.getElementById('Q3').style.color
= 'red';       
      document.getElementById('N3').innerHTML  
    = '0';      
        }
else {
document.getElementById('Q3').innerHTML 
   = "✓";
    
document.getElementById('Q3').style.color
= "purple";       
      document.getElementById('N3').innerHTML  
    = "5";  
        
}
}
    
    
 bf = document.getElementById('NQ4');
      document.getElementById('Nb4').innerHTML 
        = bf.value;  
      if(be.value != '9')
{  
      document.getElementById('Q4').innerHTML 
       = "X";
    
document.getElementById('Q4').style.color
= 'red';       
      document.getElementById('N4').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q4').innerHTML 
   = "✓";
    
document.getElementById('Q4').style.color
= "purple";       
      document.getElementById('N4').innerHTML  
    = "5";

} 
    
    
    

ag = document.getElementsByName('Nq5');
  for (i = 0; i < ag.length; i++) {
   if (ag[i].checked)
   document.getElementById('Nb5').innerHTML
    =  ag[i].value;

            
      
if(document.getElementById('Nb5').innerHTML 
      != '5')
{
                
document.getElementById('Q5').innerHTML 
   = "X"; 
    
document.getElementById('Q5').style.color
= 'red';       
      document.getElementById('N5').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q5').innerHTML 
   = "✓";
    
document.getElementById('Q5').style.color
= "purple";       
      document.getElementById('N5').innerHTML  
    = "5";

}          
 }
        
    
   
   bg = document.getElementById('NQ6');
 document.getElementById('Nb6').innerHTML 
        = bg.value;  
  if(bg.value != '16')
{
document.getElementById('Q6').innerHTML 
   = "X";
    
document.getElementById('Q6').style.color
= 'red';       
      document.getElementById('N6').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q6').innerHTML 
   = "✓";
    
document.getElementById('Q6').style.color
= "purple";       
      document.getElementById('N6').innerHTML  
    = "5";

} 
    
    
    
    
  al = document.getElementsByName('Nq7');
  for (i = 0; i < al.length; i++) {
   if (al[i].checked)
   document.getElementById('Nb7').innerHTML
    =  al[i].value;
    
    
if(document.getElementById('Nb7').innerHTML 
      != '6')
{
document.getElementById('Q7').innerHTML 
   = "X"; 
    
document.getElementById('Q7').style.color
= 'red';       
      document.getElementById('N7').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q7').innerHTML 
   = "✓";
    
document.getElementById('Q7').style.color
= "purple";       
      document.getElementById('N7').innerHTML  
    = "5";

} 
    } 

     
    
br = document.getElementById('NQ8');
     document.getElementById('Nb8').innerHTML 
        = br.value;  
  if(be.value != '14')
{
document.getElementById('Q8').innerHTML 
   = "X";
    
document.getElementById('Q8').style.color
= 'red';       
      document.getElementById('N8').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q8').innerHTML 
   = "✓";
    
document.getElementById('Q8').style.color
= "purple";       
      document.getElementById('N8').innerHTML  
    = "5";

} 
    
    
      

ap = document.getElementsByName('Nq9');
  for (i = 0; i < ap.length; i++) {
   if (ap[i].checked)
   document.getElementById('Nb9').innerHTML
    =  ap[i].value;
    
    
if(document.getElementById('Nb9').innerHTML 
      != '1')
{
document.getElementById('Q9').innerHTML 
   = "X"; 
    
document.getElementById('Q9').style.color
= 'red';       
      document.getElementById('N9').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q9').innerHTML 
   = "✓";
    
document.getElementById('Q9').style.color
    = "purple";       
      document.getElementById('N9').innerHTML  
    = "5";

} 
    }    
    
        
        
 bz = document.getElementById('NQ10');
 document.getElementById('Nb10').innerHTML 
        = bz.value;  
  if(be.value != '360')
{
document.getElementById('Q10').innerHTML 
   = "X";
    
document.getElementById('Q10').style.color
= 'red';       
      document.getElementById('N10').innerHTML  
    = '0';
        }
else {
document.getElementById('Q10').innerHTML 
   = "✓";
    
document.getElementById('Q10').style.color
= "purple";       
      document.getElementById('N10').innerHTML  
    = "5";
        
    }   
    
    
    
 //   ENGLISH QUIZ SCORES
    
    
 eb  = document.getElementsByName('Eq1');
   for (i = 0; i < eb.length; i++) {
   if (eb[i].checked)
   document.getElementById('Nb11').innerHTML
    =  eb[i].value;
    
    
if(document.getElementById('Nb11').innerHTML 
      != 'B')
{
document.getElementById('Q11').innerHTML 
   = "X"; 
    
document.getElementById('Q11').style.color
= 'red';       
      document.getElementById('N11').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q11').innerHTML 
   = "✓";
    
document.getElementById('Q11').style.color
= "purple";       
      document.getElementById('N11').innerHTML  
    = "5";

} 
    } 
    
    
    

  ef = document.getElementsByName('Eq2');
   for (i = 0; i < ef.length; i++) {
   if (ef[i].checked)
   document.getElementById('Nb12').innerHTML
    =  ef[i].value;
    
    
if(document.getElementById('Nb12').innerHTML 
      != 'A')
{
document.getElementById('Q12').innerHTML 
   = "X"; 
    
document.getElementById('Q12').style.color
= 'red';       
      document.getElementById('N12').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q12').innerHTML 
   = "✓";
    
document.getElementById('Q12').style.color
= "purple";       
      document.getElementById('N12').innerHTML  
    = "5";

} 
    } 
    
    
    
   el = document.getElementsByName('Eq3');
   for (i = 0; i < el.length; i++) {
   if (el[i].checked)
   document.getElementById('Nb13').innerHTML
    =  el[i].value;
    
    
if(document.getElementById('Nb13').innerHTML 
      != 'C')
{
document.getElementById('Q13').innerHTML 
   = "X"; 
    
document.getElementById('Q13').style.color
= 'red';       
      document.getElementById('N13').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q13').innerHTML 
   = "✓";
    
document.getElementById('Q13').style.color
= "purple";       
      document.getElementById('N13').innerHTML  
    = "5";

} 
    } 

    
    
  ey = document.getElementsByName('Eq4');
   for (i = 0; i < ey.length; i++) {
   if (ey[i].checked)
   document.getElementById('Nb14').innerHTML
    =  ey[i].value;
    
    
if(document.getElementById('Nb14').innerHTML 
      != 'D')
{
document.getElementById('Q14').innerHTML 
   = "X"; 
    
document.getElementById('Q14').style.color
= 'red';       
      document.getElementById('N14').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q14').innerHTML 
   = "✓";
    
document.getElementById('Q14').style.color
= "purple";       
      document.getElementById('N14').innerHTML  
    = "5";

} 
    } 
    
    
rg = document.getElementsByName('Eq5');
   for (i = 0; i < rg.length; i++) {
   if (rg[i].checked)
   document.getElementById('Nb15').innerHTML
    =  rg[i].value;
    
    
if(document.getElementById('Nb15').innerHTML 
      != 'E')
{
document.getElementById('Q15').innerHTML 
   = "X"; 
    
document.getElementById('Q15').style.color
= 'red';       
      document.getElementById('N15').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q15').innerHTML 
   = "✓";
    
document.getElementById('Q15').style.color
= "purple";       
      document.getElementById('N15').innerHTML  
    = "5";

} 
    } 
    
    
    
  rl = document.getElementsByName('Eq6');
   for (i = 0; i <rl.length; i++) {
   if (rl[i].checked)
   document.getElementById('Nb16').innerHTML
    =  rl[i].value;
    
    
if(document.getElementById('Nb16').innerHTML 
      != 'A')
{
document.getElementById('Q16').innerHTML 
   = "X"; 
    
document.getElementById('Q16').style.color
= 'red';       
      document.getElementById('N16').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q16').innerHTML 
   = "✓";
    
document.getElementById('Q16').style.color
= "purple";       
      document.getElementById('N16').innerHTML  
    = "5";

} 
    } 
    
    
    
  rq = document.getElementsByName('Eq7');
   for (i = 0; i < rq.length; i++) {
   if (rq[i].checked)
   document.getElementById('Nb17').innerHTML
    =  rq[i].value;
    
    
if(document.getElementById('Nb17').innerHTML 
      != 'B')
{
document.getElementById('Q17').innerHTML 
   = "X"; 
    
document.getElementById('Q17').style.color
= 'red';       
      document.getElementById('N17').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q17').innerHTML 
   = "✓";
    
document.getElementById('Q17').style.color
= "purple";       
      document.getElementById('N17').innerHTML  
    = "5";

} 
    } 
    
    
  rs = document.getElementsByName('Eq8');
   for (i = 0; i < rs.length; i++) {
   if (rs[i].checked)
   document.getElementById('Nb18').innerHTML
    =  rs[i].value;
    
    
if(document.getElementById('Nb18').innerHTML 
      != 'E')
{
document.getElementById('Q18').innerHTML 
   = "X"; 
    
document.getElementById('Q18').style.color
= 'red';       
      document.getElementById('N18').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q18').innerHTML 
   = "✓";
    
document.getElementById('Q18').style.color
= "purple";       
      document.getElementById('N18').innerHTML  
    = "5";

} 
    } 
    
    
    
  wk = document.getElementsByName('Eq9');
   for (i = 0; i < wk.length; i++) {
   if (wk[i].checked)
   document.getElementById('Nb19').innerHTML
    =  wk[i].value;
    
    
if(document.getElementById('Nb19').innerHTML 
      != 'C')
{
document.getElementById('Q19').innerHTML 
   = "X"; 
    
document.getElementById('Q19').style.color
= 'red';       
      document.getElementById('N19').innerHTML  
    = '0';
      
        }
else {
document.getElementById('Q19').innerHTML 
   = "✓";
    
document.getElementById('Q19').style.color
= "purple";       
      document.getElementById('N19').innerHTML  
    = "5";

} 
    } 
    
    
  
 wx = document.getElementsByName('Eq10');
   for (i = 0; i < wx.length; i++) {
   if (wx[i].checked)
   document.getElementById('Nb20').innerHTML
    =  wx[i].value;
    
    
if(document.getElementById('Nb20').innerHTML 
      != 'D')
{
document.getElementById('Q20').innerHTML 
   = "X"; 
    
document.getElementById('Q20').style.color
= 'red';       
      document.getElementById('N20').innerHTML  
    = '0';
      

        }
else {
document.getElementById('Q20').innerHTML 
   = "✓";
    
document.getElementById('Q20').style.color
= "purple";       
      document.getElementById('N20').innerHTML  
    = "5";

}
  }  
         
     document.getElementById('answers').style.background  = 'gold';     
        
       document.getElementById('div1').style.color
        = 'gold';
 document.getElementById('answers').style.border
        = '50%';
 document.getElementById('answers').innerHTML
  = (1 * document.getElementById('N1').innerHTML
   ) + (1 * document.getElementById('N2').innerHTML
   ) + (1 * document.getElementById('N3').innerHTML
   ) + (1 * document.getElementById('N4').innerHTML
   ) + (1 * document.getElementById('N5').innerHTML
   ) + (1 * document.getElementById('N6').innerHTML
   ) + (1 * document.getElementById('N7').innerHTML
   ) + (1 * document.getElementById('N8').innerHTML
   ) + (1 * document.getElementById('N9').innerHTML
   ) + (1 * document.getElementById('N10').innerHTML
   ) + (1 * document.getElementById('N11').innerHTML
   ) + (1 * document.getElementById('N12').innerHTML
   ) + (1 * document.getElementById('N13').innerHTML
   ) + (1 * document.getElementById('N14').innerHTML
   ) + (1 * document.getElementById('N15').innerHTML
   ) + (1 * document.getElementById('N16').innerHTML
   ) + (1 * document.getElementById('N17').innerHTML
   ) + (1 * document.getElementById('N18').innerHTML
   ) + (1 * document.getElementById('N19').innerHTML
   ) + (1 * document.getElementById('N20').innerHTML
   ) + "%";
       
    document.getElementById('scorecard').style.color

    = 'black';
   
    document.getElementById('scorecard').border 
     
    = 4 + 'px'
    
    
    
    document.getElementById('scard').style.color
    
    = 'black'
}
    