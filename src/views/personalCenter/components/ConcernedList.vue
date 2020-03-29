<template>
    <div>
        <ul class="team-list">
            <li v-for="(item ,index) in datas || []" :key="index">
                <div class="team-logo"><img style="width: 140px;height: 140px;border-radius: 50%"
                                            :src="item.combatTeamIcon"></div>
                <div class="team-name">{{item.combatTeamName}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            datas: {
                default: () => {
                    return []
                },
                type: Array
            }
        }
    }
</script>