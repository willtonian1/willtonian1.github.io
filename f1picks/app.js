image_array = [['1',JSON.parse(localStorage.getItem(1))],
['2',JSON.parse(localStorage.getItem(2))],
['3',JSON.parse(localStorage.getItem(3))],
['4',JSON.parse(localStorage.getItem(4))], 
['5',JSON.parse(localStorage.getItem(5))],
['6',JSON.parse(localStorage.getItem(6))],
['7',JSON.parse(localStorage.getItem(7))], 
['8',JSON.parse(localStorage.getItem(8))],
['9',JSON.parse(localStorage.getItem(9))], 
['10',JSON.parse(localStorage.getItem(10))], 
['11',JSON.parse(localStorage.getItem(10))],
['12',JSON.parse(localStorage.getItem(12))], 
['13',JSON.parse(localStorage.getItem(13))],
['14',JSON.parse(localStorage.getItem(14))], 
['15',JSON.parse(localStorage.getItem(15))],
['16',JSON.parse(localStorage.getItem(16))],
['17',JSON.parse(localStorage.getItem(17))],
['18',JSON.parse(localStorage.getItem(18))], 
['19',JSON.parse(localStorage.getItem(19))], 
['20',JSON.parse(localStorage.getItem(20))],
['21',JSON.parse(localStorage.getItem(21))],
['22',JSON.parse(localStorage.getItem(22))],
['23',JSON.parse(localStorage.getItem(23))],
['24',JSON.parse(localStorage.getItem(24))],
['25',JSON.parse(localStorage.getItem(25))],
['26',JSON.parse(localStorage.getItem(26))], 
['27',JSON.parse(localStorage.getItem(27))], 
['28',JSON.parse(localStorage.getItem(28))],
['29',JSON.parse(localStorage.getItem(29))],
['30',JSON.parse(localStorage.getItem(30))],
['31',JSON.parse(localStorage.getItem(31))],
['32',JSON.parse(localStorage.getItem(32))], 
['33',JSON.parse(localStorage.getItem(33))]]


function get_random_image(){
    randomIndex = Math.floor(Math.random() * image_array.length);
    selectedImage = image_array[randomIndex][0]
    document.getElementById('image1').src = `./img/${selectedImage}.jpg`

    image_array[randomIndex][1] = image_array[randomIndex][1] + 1
    
    localStorage.setItem(randomIndex,image_array[randomIndex][1] )

    let a = JSON.parse(localStorage.getItem(randomIndex))
    console.log(a)
/*
    editFile = fopen("scores.txt", 3);// opens the file for writing
    fwrite(editFile, 'hello bud');// str is the content that is to be written into the file.
    */
}

function get_random_image2(){

    randomIndex = Math.floor(Math.random() * image_array.length);
    selectedImage = image_array[randomIndex][0]
    document.getElementById('image2').src = `./img/${selectedImage}.jpg`
    
    
    image_array[randomIndex][1] = image_array[randomIndex][1] + 1

    localStorage.setItem(randomIndex,image_array[randomIndex][1] )

    let a = JSON.parse(localStorage.getItem(randomIndex))
    console.log(a)
}
/*
    image_array[randomIndex][1] = image_array[randomIndex][1] + 1
    console.log(image_array[randomIndex][1])
    */

if(window.localStorage){
    console.log('supported')
}else{
    console.log('not supported')
}

