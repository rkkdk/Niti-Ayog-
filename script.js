const left = document.querySelector('.arrowleft');
const right = document.querySelector('.arrowright');
const slider = document.querySelector('.slider');

const images=document.querySelectorAll('.image')

let slidenumber=1;//intialize slide number 
const length = images.length;


right.addEventListener('click',()=>{

    /*/it multiply with frame so image will move next postion like 100 200 300 400 bcz our image has exist on these position*/

    if(slidenumber<images.length)
    {
        slider.style.transform = `translateX(-${slidenumber*100}%)`;
        slidenumber++;
    }

    else
    {
        slider.style.transform = `translateX(0%)`;// again start image from 1st image
        slidenumber=1;//again set slidenumber count = 1
     }
})

  left.addEventListener('click',() => {
        if(slidenumber>1)
            {
                slider.style.transform=`translateX(-${
                    (slidenumber-2)*100}%)`;
                    slidenumber--;

            } 
            else{
                slider.style.transform=`translateX(-${
                    (images.length-1)*100}%)`;
                slidenumber=images.length;
              }
              
    })


    const left1 = document.querySelector('.arrowleft1');
    const right1 = document.querySelector('.arrowright1');
    const section_slider = document.querySelector('.section1img-text');

    const section_image = document.querySelectorAll('.container');
    const length_of_section1_image = section_image.length;

    let slidenumber_of_section_image = 1;

    right1.addEventListener('click',()=>
    {
        if(slidenumber_of_section_image<length_of_section1_image)
            section_slider.style.transform=`translateX(-${slidenumber_of_section_image*17}%)`;
        slidenumber_of_section_image++;

    })

    
            
    
/*div creation

          const bottom = document.querySelector('.bottom');
          // creating dot slider section 
          for(let i=0; i<length; i++)
            {
                const div = document.createElement('div');
                div.className = 'button';//giving class name to all dot button
                bottom.appendChild(div);
                
            }

            const buttons = document.querySelectorAll('.button');

            buttons[0].style.backgroundColor = 'black';

            // div functionality (start auto slider)


*/