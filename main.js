/**
 * @param {string} command
 * @return {Array}
 */
var isBoundedCircle = function(commands) {
    const no = 'No', yes = 'Yes';
    
    let result = [];
    
    for (let i = 0; i < commands.length; i++) {
        let iteration = 0;
        
        // reset the direction from start for second command
        let dir = 0; // 0 - N, 1 - E, 2 - S, 3 - W
        let x = 0, y = 0, 
        
        // this was the condition missed, assuming the state continues from the previous command
        while (iteration < 4) { 
            switch(commands[i]) {
                case 'G':
                if (dir == 0) 
                    y++; 
                else if (dir == 1) 
                    x++; 
                else if (dir == 2) 
                    y--; 
                else if (dir == 3) 
                    x--; 
                break;

                case 'L':
                    dir = (4 + dir - 1)%4; 
                break;

                case 'R':
                    dir = (dir + 1)%4; 
                break;

            }
        }
        
        
        if (x == 0 && y == 0) {
            result.push(yes)
        } else {
            result.push(no);
        }
    }
};
