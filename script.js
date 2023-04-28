//your JS code here. If required.
let flag1 = false;
let flag2 = false;
let user1Arr = [];
let user2Arr = [];
let booluser = new Array(9).fill(false);
let isUser1 = false;
let isUser2 = false;
let resArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let msg = document.getElementById("message");
let backbtn = document.getElementById("back");
let user1, user2;
function getData() {
    document.body.style.background = "rgb(15 147 223 / 77%)";
    user1 = document.getElementById("player-1").value;
    user2 = document.getElementById("player-2").value;
    if(user1 == '' || user2 == ''){
        alert("PLease Enter valid user names!!");
        return;
    }

    document.getElementById("gamePage").style.display = "block";
    document.getElementById("form").style.display = "none";
}

function changeData(id) {
    console.log(id);
    if (flag1 == false && !booluser[id]) {
        document.getElementById(id).innerText = "X";
        msg.innerHTML = `${user1}, you're up`;
        document.getElementById(id).style.fontSize = "36px";
        document.getElementById(id).style.background = "purple";
        document.getElementById(id).style.padding = "20px";
        document.getElementById(id).style.textAlign = "center";

        user1Arr.push(parseInt(id));
        booluser[id] = true;
        user1Arr.sort((a, b) => a - b);
        if (user1Arr.length >= 3) {
            for (let i = 0; i < user1Arr.length; i++) {
                for (let j = i + 1; j < user1Arr.length; j++) {
                    for (let k = j + 1; k < user1Arr.length; k++) {
                        for (let l = 0; l < resArr.length; l++) {
                            let item = resArr[l];
                            if (item[0] == user1Arr[i] && item[1] == user1Arr[j] && item[2] == user1Arr[k]) {
                                msg.innerHTML = `${user1}, congratulations you won!`;
                                setTimeout(()=>{
                                    document.getElementById("modal").style.display = "block";
                                },1500);
                                // document.getElementById("modal").style.display = "block";
                                flag1 = true;
                                flag2 = true;
                                return;
                            }
                        }
                    }

                }
            }
            // if(user1Arr.length >=5 || user2Arr.length >= 5){
            // msg.innerHTML = `Ohh!!!, it's A draw match playy Again...`;
            // document.getElementById("modal").display = "block";
            // return;
            // }

        }

        flag1 = true;
        flag2 = false;
    }
    else if (flag2 == false && !booluser[id]) {
        document.getElementById(id).innerText = "0";
        msg.innerHTML = `${user2}, you're up`;
        document.getElementById(id).style.fontSize = "36px";
        document.getElementById(id).style.background = "orange";
        document.getElementById(id).style.padding = "20px";
        document.getElementById(id).style.textAlign = "center";
        user2Arr.push(parseInt(id));
        user2Arr.sort((a, b) => a - b);
        booluser[id] = true;
        if (user2Arr.length >= 3) {
            for (let i = 0; i < user2Arr.length; i++) {
                for (let j = i + 1; j < user2Arr.length; j++) {
                    for (let k = j + 1; k < user2Arr.length; k++) {
                        for (let l = 0; l < resArr.length; l++) {
                            let item = resArr[l];
                            if (item[0] == user2Arr[i] && item[1] == user2Arr[j] && item[2] == user2Arr[k]) {
                                msg.innerHTML = `${user2}, congratulations you won!`;
                                setTimeout(()=>{
                                    document.getElementById("modal").style.display = "block";
                                },1500);
                                // document.getElementById("modal").style.display = "block";
                                flag2 = true;
                                flag1 = true;
                                return;
                            }
                        }
                    }

                }
            }
        }
        flag2 = true;
        flag1 = false;

    }



}


function playAgain(){
    document.getElementById("modal").style.display = "none";
    user1Arr = [];
    user2Arr = [];
    flag1 = false;
    flag2 = false;
    for(let i = 1; i <=9; i++){
        booluser[i] = false;
    }
    
   for(let i = 1; i <=9; i++){
    document.getElementById(i).innerHTML = "";
    document.getElementById(i).style.background = "#FFC0CB";
   }
   document.getElementById("message").innerHTML = "";

}

backbtn.addEventListener('click',()=>{
    location.reload();
})
