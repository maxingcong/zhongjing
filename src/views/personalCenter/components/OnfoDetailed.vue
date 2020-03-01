<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active"><a href="#">竞豆明细</a></li>
                </ul>
            </div>
            <div class="pannel-body">
                <div class="bean-recharge-box">
                    <table class="table-info">
                        <thead>
                        <tr>
                            <th>时间</th>
                            <th>项目</th>
                            <th>数量</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2019-11-30</td>
                            <td><p>竞猜赚取</p></td>
                            <td><span class="text-warning"><b>+100</b></span></td>
                        </tr>
                        <tr>
                            <td>2019-11-30</td>
                            <td><p>竞猜赚取</p></td>
                            <td><span class="text-warning"><b>+4500</b></span></td>
                        </tr>
                        <tr>
                            <td>2019-11-30</td>
                            <td><p>兑换</p></td>
                            <td><span class="text-primary"><b>-100</b></span></td>
                        </tr>
                        <tr>
                            <td>2019-11-30</td>
                            <td><p>邀请用户成功注册</p></td>
                            <td><span class="text-warning"><b>+100</b></span></td>
                        </tr>
                        <tr>
                            <td>2019-11-30</td>
                            <td><p>兑换</p></td>
                            <td><span class="text-warning"><b>+100</b></span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "infoDetailed",
        props: {
            isEdit: {
                default: true
            }
        }
    }
</script>

<style scoped>

</style>