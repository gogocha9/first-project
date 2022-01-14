<template>
    <div>
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}</div>
    </div>
</template>

<script>
    const rspCord = {
        바위: '5px',
        가위: '-90px',
        보: '-175px',
    }

    const scores = {
        가위: 1,
        바위: 0,
        보: -1,
    }
    const computerChoice = (imgCord) => {
        return Object.entries(rspCord).find((v) => {
            return v[1] === imgCord;
        })[0];
    };

    let interval = null;
    export default {
        data() {
            return {
                imgCord: rspCord.바위,
                result: '',
                score: 0,
            };
        },
        computed: {
            computedStyleObject() {
                return {
                    background: `url(./Rock-paper-scissors.jpg) ${this.imgCord} 0`,
                }
            }
        },

        methods: {
            changeHand() {
                interval = setInterval(() => {
                if(this.imgCord === rspCord.바위) {
                    this.imgCord = rspCord.가위;
                } else if(this.imgCord === rspCord.가위) {
                    this.imgCord = rspCord.보;
                } else if(this.imgCord === rspCord.보) {
                    this.imgCord = rspCord.바위;
                }
            }, 100);
            },
            onClickButton(choice) {
                clearInterval(interval);
                const myScore = scores[choice];
                const cpuScore = scores[computerChoice(this.imgCord)];
                const diff = myScore - cpuScore;
                if(diff === 0) {
                    this.result = '비겼습니다.';
                } else if([-1, 2].includes(diff)) {
                    this.result = '이겼습니다';
                    this.score += 1;
                } else {
                    this.result = '졌습니다';
                    this.score -= 1;
                }
                setTimeout(() => {
                    this.changeHand()
                }, 1000);
            },
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        create() {
            console.log('create');
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
            this.changeHand();
        },
        beforeUpdate() {
            console.log('beforeUpdate');
        },
        update() {
            console.log('update');
        },
        beforeDestroyed() {
            console.log('beforeDestroyed');
            clearInterval(interval);
        },
        destroyed() {
            console.log('destroyed');
        },
    };

</script>

<style scoped>
    #computer {
        width: 120px;
        height: 200px;
        background-position: 0 0;
    }
</style>