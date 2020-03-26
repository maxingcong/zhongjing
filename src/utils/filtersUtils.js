import Vue from "vue";

const filters = {
    /*
    * 格式化时间为 年yy-mmmm-dd
    */
    filterallYear(item) {
        // if (!item) return ''
        if (!item) {
            return ''
        }
        let arr = item && item.split(' ') || [],
            a = arr[0] || '',
            b = arr[1].split('.')[0] || ''
        a = a.split('-').slice(0, 3).join('-')
        b = b.split(':').slice(0, 3).join(':')
        return a + '      ' + b
    },
    /*
     * 格式化时间为 年yy-mmmm-dd
     */
    filterYear(item) {
        // if (!item) return ''
        if (!item) {
            return ''
        }
        let arr = item && item.split(' ') || [],
            a = arr[0] || ''
        a = a.split('-').slice(0, 3).join('-')
        return a
    },
    /*
     * 格式化时间为 月日  时分
     */
    filterTime(item) {
        if (!item) {
            return ''
        }
        let arr = item && item.split(' ') || [],
            a = arr[0] || '',
            b = arr[1].split('.')[0] || ''
        a = a.split('-').slice(1, 3).join('-')
        b = b.split(':').slice(0, 2).join(':')
        return a + '      ' + b
    },
    //月日
    filterTimeDate(item) {
        if (!item) {
            return ''
        }
        let arr = item && item.split(' ') || [],
            a = arr[0] || '',
            b = arr[1].split('.')[0] || ''
        a = a.split('-').slice(1, 3).join('-')
        console.log(b)
        return a
    }
}
// register filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
