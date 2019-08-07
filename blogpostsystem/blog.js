var vue = new Vue({
    el: '#blogapp',
    data: {
        title: '',
        published_date: '',
        author: '',
        authors: ['Ajay', 'Sagar', 'Bijay', 'Krishna'],
        detail: '',
        category: '',
        categories: ['Food hygeine', 'Events handling', 'Kitchen management', 'Staffs hiring'],
        visitcount: 0,
        status: '',
        statuses: ['Published', 'Draft'],
        blogList: [],
        blog_index: null,
        msg: '',
        block: 'addBlock',
        test : 0

    },
    methods: {
        addBlog: function (event) {
            this.blogList.push({
                title: this.title,
                p_date: this.published_date,
                author: this.author,
                detail: this.detail,
                category: this.category,
                visitcount: this.visitcount,
                status: this.status,

            })
            this.msg = this.title + ' was added'
            this.test = 2
            event.target.reset()
            this.clearform()
        },
        clearform: function () {
            this.title = '',
                this.published_date = '',
                this.author = '',
                this.detail = '',
                this.category = '',
                this.status = ''
        },
        clearform2: function (event) {
            this.block = 'addBlog',
                // event.target.reset(),
            this.clearform()
        },
        setCurrent: function (index) {
            this.blog_index = index;
            this.blogList[index].visitcount++;
        },

        detailBlog: function (index) {
            console.log(index)
            this.block = 'showDetail';
            return this.blogList[index]
        },
        deleteBlog: function (index) {
            console.log(index)
            this.blog_index = null
            this.blogList.splice(index, 1);
        },
        updateBlog(index) {
            this.test = 1;
            this.msg = '',
                this.block = 'addBlog',
                this.title = this.blogList[index].title,
                this.published_date = this.blogList[index].p_date,
                this.author = this.blogList[index].author,
                this.detail = this.blogList[index].detail,
                this.category = this.blogList[index].category,
                this.status = this.blogList[index].status

        },
        updateIndex(){
            this.test = 1;
            this.msg = '',
                this.block = 'addBlog',
                this.blogList[index].title = this.title,
                this.blogList[index].p_date = this.published_date,
                this.blogList[index].author = this.author,
                this.blogList[index].detail = this.detail,
                this.blogList[index].category = this.category,
                this.blogList[index].status = this.status
        }
    }
})