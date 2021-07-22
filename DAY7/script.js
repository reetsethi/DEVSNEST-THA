//Question1

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
document.write("<strong>Question1</strong><br>");
document.write(Object.keys(student),"<br><br>");

//Question2

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
document.write("<strong>Question2</strong><br>");
document.write("Before deletion: ", student, "<br>");
delete student.rollno;
document.write("After deletion: ", student, "<br><br>");

//Question3

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
document.write("<strong>Question3</strong><br>");
document.write(Object.keys(student).length,"<br><br>");

//Quetsion4

var library = [ 
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        readingStatus: true }, 
    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        readingStatus: true 
    }, 
    { 
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false 
    }
]; 
document.write("<strong>Question4</strong><br>");
document.write("<b>Reading Status</b>");
for(let items in library) {
    document.write("<br>Title: ",library[items].title, "<br>Author: ",library[items].author,"<br>Status: ", library[items].readingStatus);
    document.write("<br>");
}
document.write("<br><br>");

//Question5

const cylinder = {
    r:8, 
    h:10,
    volume : function() {
        var vol = 2 * Math.PI * cylinder.r * cylinder.h;
        vol = vol.toFixed(4);
        document.write(`Volume of cylinder: `, vol);
    }
};

document.write("<strong>Question5</strong><br>");
document.write(cylinder.volume(), "<br><br>");

//Question6

var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];

library.sort((a,b) => {
    let fa=a.author.toLowerCase();
    let fb=b.author.toLowerCase();

    if(fa<fb) {
        return -1;
    }
    if(fa>fb) {
        return 1;
    }
    return 0;
});

document.write("<strong>Question6</strong><br>");
for(let item in library) {
    document.write(library[item].author ," ", library[item].title ," ", library[item].libraryID);
    document.write("<br>");
}
document.write("<br>");