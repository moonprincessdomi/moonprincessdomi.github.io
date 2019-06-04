var images= [{
    "id":1,
    "url":"images/gallery/1.jpg"
},
{
    "id":2,
    "url":"images/gallery/2.jpg"
},
{
    "id":3,
    "url":"images/gallery/3.jpg"
},
{
    "id":4,
    "url":"images/gallery/4.jpg"
},
{
    "id":5,
    "url":"images/gallery/5.jpg"
},
{
    "id":6,
    "url":"images/gallery/6.jpg"
},
{
    "id":7,
    "url":"images/gallery/7.jpg"
},
{
    "id":8,
    "url":"images/gallery/8.jpg"
},
{
    "id":9,
    "url":"images/gallery/9.jpg"
},
{
    "id":10,
    "url":"images/gallery/10.jpg"
},
{
    "id":11,
    "url":"images/gallery/11.jpg"
},
{
    "id":12,
    "url":"images/gallery/12.jpg"
},
{
    "id":13,
    "url":"images/gallery/13.jpg"
}]

function ChangeSize() {
    const childDivs = document.getElementsByClassName('img-box');
    let boxPosition = document.getElementById("box").offsetLeft + document.getElementById("box").offsetWidth;
    let j = 0;
    var tempWidth = 0;
    for (childDiv of childDivs) {
        let tempPosition = childDiv.offsetLeft;
        if (childDiv.id < j) {
            continue;
        }
        if (screen.width > 800) {
            if (j % 5 == 0) {
                if (tempPosition + 420 <= boxPosition) {
                    childDiv.style.width = '420px';
                }
                else {
                    childDiv.style.width = '200px';
                }
            }
            else {
                childDiv.style.width = '200px';
            }
        }
        else {
            childDiv.style.height = "400px";
            childDiv.style.padding = "20px"
            if (j % 3 == 0) {
                if (tempPosition + 820 <= boxPosition) {
                    childDiv.style.width = '840px';
                }
                else {
                    childDiv.style.width = '400px';
                }
            }
            else if (j % 4 == 0) {
                if (tempPosition + 820 <= boxPosition) {
                    childDiv.style.height = "840px";
                    childDiv.style.width = '840px';
                }
                else {
                    childDiv.style.width = '400px';
                }
            }
            else {
                childDiv.style.width = '400px';
            }
        }
        j++;
    }
    for (childDiv of childDivs) {
        if (childDiv.offsetTop === document.getElementById('box').lastChild.offsetTop) {
            tempWidth = tempWidth + childDiv.offsetWidth;
        }
    }
    if (screen.width > 800) {
        if (tempWidth + 210 <= document.getElementById('box').offsetWidth) {
            document.getElementById('box').lastChild.style.width = '420px';
        }
    }
    else {
        if (tempWidth + 420 <= document.getElementById('box').offsetWidth) {
            document.getElementById('box').lastChild.style.width = '840px';
        }

    }
}

function loadImage() {
    let j = 0;
    for (j;(j < images.length); j++){
            let src = images[j].url;
            img = document.createElement('img');
            img.src = src;
            img.style.objectFit = 'cover';
            img.style.objectPosition = '50% 50%';
            var iDiv = document.createElement('div');
            iDiv.id = j;
            iDiv.className = 'img-box';
            document.getElementById('box').appendChild(iDiv);
            if (screen.width > 800) {
                iDiv.style.height = '200px';
                iDiv.style.width = '200px';
            }
            else {
                iDiv.style.height = '400px';
                iDiv.style.width = '400px';
            }
            document.body.appendChild(img);
            document.getElementById(j).appendChild(img);
    }
    ChangeSize();
}

// function showElement() {
//     loadImage();
// }

// var myVar;

// function myFunction() {
//     myVar = setTimeout(loadImage, 3000);
// }

// myFunction();

loadImage();
