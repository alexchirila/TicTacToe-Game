$(document).ready(function(){   

    $("#choose-side").modal("show");    

        $("button").click(function(e){
            var userSide = e.target.id;
            var user;
            var computer;
            var isUserTurn;
            var counter = 0;
            var winCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
            var cornersAndMiddle = [0, 2, 4, 6, 8];
            var corners = [0, 2, 6, 8];
            var topCorners = [0, 2];
            var bottomCorners = [6, 8];
            var leftCorners = [0, 6];
            var rightCorners = [2, 8];
            var leftDiagonal = [0, 8];
            var rightDiagonal = [2, 6];
            var computerWins, userWins;

            if (userSide === "x") {
                user = 'x'
                computer = '0';
                console.log(user + computer);
            } else {
                user = '0';
                computer = 'x';
                console.log(user + computer);
            }

            if (user === 'x' || user === '0') {
                isuserTurn = false;
            }

            
            function checkEmptyTds() {

                var options = [];

                $('td').each(function(){
                    if (this.innerHTML === '') {
                        options.push($('td').index(this));
                    }
                }); 

                return options;
            }

             function checkValuesFromTds() {

                var valuesFromTds = [];

                $('td').each(function(){
                    if (this.innerHTML === '') {
                        valuesFromTds.push(undefined);
                    }

                    if (this.innerHTML !== '') {
                        valuesFromTds.push(this.innerHTML);
                    }

                }); 

                return valuesFromTds;
            }

            function game(){

                if (isuserTurn) {
                    userTurn();
                } else{
                    computerTurn();
                }

            }

            function checkUserMove() {
                if (checkValuesFromTds()[4] === computer) {
                    if (checkValuesFromTds()[0] === user) {
                        $('td').eq(8).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[2] === user) {
                        $('td').eq(6).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[6] === user) {
                        $('td').eq(2).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[8] === user) {
                        $('td').eq(0).html(computer).addClass('marked');
                        return;
                    }
                }

                if (checkValuesFromTds()[4] === computer) {
                    if (checkValuesFromTds()[1] === user) {
                        var random = corners[Math.floor(Math.random()*corners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[3] === user) {
                        var random = corners[Math.floor(Math.random()*corners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[5] === user) {
                        var random = corners[Math.floor(Math.random()*corners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[7] === user) {
                        var random = corners[Math.floor(Math.random()*corners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    }

                }

                if (checkValuesFromTds()[0] === computer) {
                    if (checkValuesFromTds()[1] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[3] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[5] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[7] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    }
                }

                if (checkValuesFromTds()[2] === computer) {
                    if (checkValuesFromTds()[1] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[3] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[5] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[7] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    }
                }

                if (checkValuesFromTds()[6] === computer) {
                    if (checkValuesFromTds()[1] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[3] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[5] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[7] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    }
                }

                if (checkValuesFromTds()[8] === computer) {
                    if (checkValuesFromTds()[1] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[3] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[5] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[7] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    }
                }

                if (checkValuesFromTds()[0] === computer) {
                    if (checkValuesFromTds()[2] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[6] === user) {
                        var random = rightCorners[Math.floor(Math.random()*rightCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[8] === user) {
                        var random = rightDiagonal[Math.floor(Math.random()*rightDiagonal.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    }
                }

                if (checkValuesFromTds()[2] === computer) {
                    if (checkValuesFromTds()[0] === user) {
                        var random = bottomCorners[Math.floor(Math.random()*bottomCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[6] === user) {
                        var random = leftDiagonal[Math.floor(Math.random()*leftDiagonal.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[8] === user) {
                        var random = leftCorners[Math.floor(Math.random()*leftCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    }
                }

                if (checkValuesFromTds()[6] === computer) {
                    if (checkValuesFromTds()[0] === user) {
                        var random = rightCorners[Math.floor(Math.random()*rightCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[2] === user) {
                        var random = leftDiagonal[Math.floor(Math.random()*leftDiagonal.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[8] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    }
                }

                if (checkValuesFromTds()[8] === computer) {
                    if (checkValuesFromTds()[0] === user) {
                        var random = rightDiagonal[Math.floor(Math.random()*rightDiagonal.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[2] === user) {
                        var random = leftCorners[Math.floor(Math.random()*leftCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[6] === user) {
                        var random = topCorners[Math.floor(Math.random()*topCorners.length)];
                        $('td').eq(random).html(computer).addClass('marked');
                        return;
                    }
                }

                if (checkValuesFromTds()[4] === user) {
                    if (checkValuesFromTds()[0] === computer) {
                        $('td').eq(8).html(computer).addClass('marked');
                        return;
                    } else if (checkValuesFromTds()[2] === computer) {
                        $('td').eq(6).html(computer).addClass('marked');
                        return;
                    }  else if (checkValuesFromTds()[6] === computer) {
                        $('td').eq(2).html(computer).addClass('marked');
                        return;
                    }  else if (checkValuesFromTds()[8] === computer) {
                        $('td').eq(0).html(computer).addClass('marked');
                        return;
                    }
                }


                
            }

            function checkSecondUserMove() {

                if (checkValuesFromTds()[0] === computer && checkValuesFromTds()[8] === computer && checkValuesFromTds()[4] !== user) {
                    $('td').eq(4).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[2] === computer && checkValuesFromTds()[6] === computer && checkValuesFromTds()[4] !== user) {
                    $('td').eq(4).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === computer && checkValuesFromTds()[0] === computer && checkValuesFromTds()[8] !== user) {
                    $('td').eq(8).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === computer && checkValuesFromTds()[2] === computer && checkValuesFromTds()[6] !== user) {
                    $('td').eq(6).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === computer && checkValuesFromTds()[6] === computer && checkValuesFromTds()[2] !== user) {
                    $('td').eq(2).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === computer && checkValuesFromTds()[8] === computer && checkValuesFromTds()[0] !== user) {
                    $('td').eq(0).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === computer && checkValuesFromTds()[2] === computer && checkValuesFromTds()[1] !== user) {
                    $('td').eq(1).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === computer && checkValuesFromTds()[6] === computer && checkValuesFromTds()[3] !== user) {
                    $('td').eq(3).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[2] === computer && checkValuesFromTds()[8] === computer && checkValuesFromTds()[5] !== user) {
                    $('td').eq(5).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[6] === computer && checkValuesFromTds()[8] === computer && checkValuesFromTds()[7] !== user) {
                    $('td').eq(7).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[1] === user && checkValuesFromTds()[7] !== computer) {
                    $('td').eq(7).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[3] === user && checkValuesFromTds()[5] !== computer) {
                    $('td').eq(5).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[5] === user && checkValuesFromTds()[3] !== computer) {
                    $('td').eq(3).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[7] === user && checkValuesFromTds()[1] !== computer) {
                    $('td').eq(1).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[0] === user && checkValuesFromTds()[8] !== computer) {
                    $('td').eq(8).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[2] === user && checkValuesFromTds()[6] !== computer) {
                    $('td').eq(6).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[6] === user && checkValuesFromTds()[2] !== computer) {
                    $('td').eq(2).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[8] === user && checkValuesFromTds()[0] !== computer) {
                    $('td').eq(0).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === user && checkValuesFromTds()[1] === user && checkValuesFromTds()[2] !== computer) {
                    $('td').eq(2).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[3] === user && checkValuesFromTds()[4] === user && checkValuesFromTds()[5] !== computer) {
                    $('td').eq(5).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[6] === user && checkValuesFromTds()[7] === user && checkValuesFromTds()[8] !== computer) {
                    $('td').eq(8).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[1] === user && checkValuesFromTds()[2] === user && checkValuesFromTds()[0] !== computer) {
                    $('td').eq(0).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[5] === user && checkValuesFromTds()[3] !== computer) {
                    $('td').eq(3).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[7] === user && checkValuesFromTds()[8] === user && checkValuesFromTds()[6] !== computer) {
                    $('td').eq(6).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === user && checkValuesFromTds()[3] === user && checkValuesFromTds()[6] !== computer) {
                    $('td').eq(6).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[1] === user && checkValuesFromTds()[4] === user && checkValuesFromTds()[7] !== computer) {
                    $('td').eq(7).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[2] === user && checkValuesFromTds()[5] === user && checkValuesFromTds()[8] !== computer) {
                    $('td').eq(8).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[6] === user && checkValuesFromTds()[3] === user && checkValuesFromTds()[0] !== computer) {
                    $('td').eq(0).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[7] === user && checkValuesFromTds()[4] === user && checkValuesFromTds()[1] !== computer) {
                    $('td').eq(1).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[8] === user && checkValuesFromTds()[5] === user && checkValuesFromTds()[2] !== computer) {
                    $('td').eq(2).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] !== computer && checkValuesFromTds()[4] !== user) {
                    $('td').eq(4).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === user && checkValuesFromTds()[2] === user && checkValuesFromTds()[1] !== computer) {
                    $('td').eq(1).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[6] === user && checkValuesFromTds()[8] === user && checkValuesFromTds()[7] !== computer) {
                    $('td').eq(7).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === user && checkValuesFromTds()[6] === user && checkValuesFromTds()[3] !== computer) {
                    $('td').eq(3).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[2] === user && checkValuesFromTds()[8] === user && checkValuesFromTds()[5] !== computer) {
                    $('td').eq(5).html(computer).addClass('marked');
                    return;
                }             




                else {
                    var random = checkEmptyTds()[Math.floor(Math.random()*checkEmptyTds().length)];
                    $('td').eq(random).html(computer).addClass('marked');
                }

            }

            function checkThirdUserMove() {
                
                 if (checkValuesFromTds()[0] === user && checkValuesFromTds()[1] === user && checkValuesFromTds()[2] !== computer) {
                    $('td').eq(2).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[3] === user && checkValuesFromTds()[4] === user && checkValuesFromTds()[5] !== computer) {
                    $('td').eq(5).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[6] === user && checkValuesFromTds()[7] === user && checkValuesFromTds()[8] !== computer) {
                    $('td').eq(8).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[1] === user && checkValuesFromTds()[2] === user && checkValuesFromTds()[0] !== computer) {
                    $('td').eq(0).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] === user && checkValuesFromTds()[5] === user && checkValuesFromTds()[3] !== computer) {
                    $('td').eq(3).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[7] === user && checkValuesFromTds()[8] === user && checkValuesFromTds()[6] !== computer) {
                    $('td').eq(6).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === user && checkValuesFromTds()[3] === user && checkValuesFromTds()[6] !== computer) {
                    $('td').eq(6).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[1] === user && checkValuesFromTds()[4] === user && checkValuesFromTds()[7] !== computer) {
                    $('td').eq(7).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[2] === user && checkValuesFromTds()[5] === user && checkValuesFromTds()[8] !== computer) {
                    $('td').eq(8).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[6] === user && checkValuesFromTds()[3] === user && checkValuesFromTds()[0] !== computer) {
                    $('td').eq(0).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[7] === user && checkValuesFromTds()[4] === user && checkValuesFromTds()[1] !== computer) {
                    $('td').eq(1).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[8] === user && checkValuesFromTds()[5] === user && checkValuesFromTds()[2] !== computer) {
                    $('td').eq(2).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === user && checkValuesFromTds()[2] === user && checkValuesFromTds()[1] !== computer) {
                    $('td').eq(1).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[6] === user && checkValuesFromTds()[8] === user && checkValuesFromTds()[7] !== computer) {
                    $('td').eq(7).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === user && checkValuesFromTds()[6] === user && checkValuesFromTds()[3] !== computer) {
                    $('td').eq(3).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[2] === user && checkValuesFromTds()[8] === user && checkValuesFromTds()[5] !== computer) {
                    $('td').eq(5).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[2] !== computer && checkValuesFromTds()[2] !== user) {
                    $('td').eq(2).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[6] !== computer && checkValuesFromTds()[6] !== user) {
                    $('td').eq(6).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[8] !== computer && checkValuesFromTds()[8] !== user) {
                    $('td').eq(8).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[4] !== computer && checkValuesFromTds()[4] !== user) {
                    $('td').eq(4).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === computer && checkValuesFromTds()[2] === computer && checkValuesFromTds()[1] !== user) {
                    $('td').eq(1).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[0] === computer && checkValuesFromTds()[6] === computer && checkValuesFromTds()[3] !== user) {
                    $('td').eq(3).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[2] === computer && checkValuesFromTds()[8] === computer && checkValuesFromTds()[5] !== user) {
                    $('td').eq(5).html(computer).addClass('marked');
                    return;
                } else if (checkValuesFromTds()[6] === computer && checkValuesFromTds()[8] === computer && checkValuesFromTds()[7] !== user) {
                    $('td').eq(7).html(computer).addClass('marked');
                    return;
                }

                else {
                    var random = checkEmptyTds()[Math.floor(Math.random()*checkEmptyTds().length)];
                    $('td').eq(random).html(computer).addClass('marked');
                }

            }

            function checkForthUserMove() {
                var random = checkEmptyTds()[Math.floor(Math.random()*checkEmptyTds().length)];
                    $('td').eq(random).html(computer).addClass('marked');
            }


            function computerTurn() {
            
                $('td').unbind("click");

                if(counter === 0){
                    var random = cornersAndMiddle[Math.floor(Math.random()*cornersAndMiddle.length)];
                    $('td').eq(random).html(computer).addClass('marked');
                    checkForWin();
                    counter++;
                    userTurn();
                    console.log(counter);

                } else if (counter !== 0 && counter !== 9) {
                    
                    if (checkEmptyTds().length === 7) {
                        checkUserMove();
                    } else if (checkEmptyTds().length === 5) {
                        checkSecondUserMove();
                    } else if (checkEmptyTds().length === 3) {
                        checkThirdUserMove();
                    } else if (checkEmptyTds().length === 1) {
                        checkForthUserMove();
                    }
                    
                    checkForWin();
                    counter++;
                    userTurn();
                    console.log(counter);                

                } else if (counter === 9 && userWins === true) {
                    $('.winner').html("You win!").css({ 'display' : 'block' });
                    setTimeout(resetGame,3000);

                }

                console.log(random);
                console.log(checkEmptyTds());
                console.log(checkValuesFromTds());

            }   

            function userTurn() {

                if(counter !== 9){
                    $('td').click(function(){

                        var userClick = $(this);
                        userClick.html(user).addClass('marked');
                        checkForWin(); 
                        counter++;
                        computerTurn();

                    });

                } else if (counter === 9 && computerWins === true) {
                    $('.winner').html("Computer wins!").css({ 'display' : 'block' });
                    setTimeout(resetGame,3000);

                } else {
                    $('.winner').html("It was a draw!").css({ 'display' : 'block' });
                    setTimeout(resetGame,3000);
                }

            }

            function checkForWin() {
                for(var i = 0; i < winCombo.length; i++){
                    for(var j = 0; j < winCombo[i].length; j++){
                        if( $('td').eq(winCombo[i][j]).html() === computer && $('td').eq(winCombo[i][j+1]).html() === computer && $('td').eq(winCombo[i][j+2]).html() === computer){
                        
                        $('td').eq(winCombo[i][j]).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                        $('td').eq(winCombo[i][j+1]).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                        $('td').eq(winCombo[i][j+2]).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

                        counter = 8;
                        computerWins = true;

                        } else if ( $('td').eq(winCombo[i][j]).html() === user && $('td').eq(winCombo[i][j+1]).html() === user && $('td').eq(winCombo[i][j+2]).html() === user){

                        $('td').eq(winCombo[i][j]).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                        $('td').eq(winCombo[i][j+1]).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                        $('td').eq(winCombo[i][j+2]).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

                            counter = 8;
                        userWins = true;
                    }
                    }
                }
            }

            function resetGame() {

            $('.winner').css('display', 'none');
            $('td').html('').removeClass('marked'); 
            computerWins = false;
            userWins = false;
            counter = 0;
            //location.reload();
            game();

            }

            game();
           

        });

});