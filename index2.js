team=[
    {
        name:"Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29
    },
    {
        name:"Liverpool",
        points: 88,
        GD: 39
    },
]

function leaderboard(x) {
    for (let i = x.length-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if(x[j].points<x[j+1].points){
                a=x[j]
                x[j]=x[j+1]
                x[j+1]=a
            } else {
                if (x[j].points==x[j+1].points) {
                    if(x[j].GD<x[j+1].GD){
                        a=x[j]
                        x[j]=x[j+1]
                        x[j+1]=a
                    } else {
                        if (x[j].GD==x[j+1].GD) {
                            if (x[j].name>x[j+1].name) {
                                a=x[j]
                                x[j]=x[j+1]
                                x[j+1]=a
                            }
                        }
                    }
                }
            }
        }
    }
    for (let i = 0; i < x.length; i++) {
        x[i].position=i+1
    }
    return x
}
console.log(leaderboard(team))