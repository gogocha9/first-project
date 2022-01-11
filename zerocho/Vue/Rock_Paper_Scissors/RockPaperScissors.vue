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
            onClickButton(choice) {

            }
        }
    };
</script>

<style scoped>
    #computer {
        width: 120px;
        height: 200px;
        background-position: 0 0;
    }
</style>