<template>
  <div>
    <van-nav-bar
      title="全部词书"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
    />
    <van-tabs
      v-model="activeTagName"
      color="blue"
      title-inactive-color="#808A87"
      title-active-color="#292421"
      sticky
      offset-top="46"
      @click="clickGetTagHeight"
    >
      <div class="van-hairline--bottom"></div>
      <van-tab
        v-for="(booksList, i) in booksLists"
        :key="i"
        :title="booksList.tagName"
      >
        <van-sticky offset-top="90">
          <div class="tagContainer">
            <div
              class="tagContent"
              :class="{ tagContent_on: j === isCurrentIndex }"
              v-for="(secondtag, j) in booksList.secondTag"
              :key="j"
              @click="clickScrollToTag(j)"
            >
              {{ secondtag }}
            </div>
          </div>
        </van-sticky>
        <div :ref="booksList.tagName">
          <div v-for="(content, k) in booksList.contents" :key="k">
            <div class="book_tag">{{ content.tag }}词汇</div>
            <van-card
              v-for="(tag, l) in content.tagContent"
              :key="l"
              :thumb="tag.cover"
            >
              <template #desc>
                <div class="book_title">
                  {{ tag.title }}
                  <van-icon
                    v-if="tag.isHot === '1'"
                    name="fire-o"
                    color="#ee0a24"
                  />
                </div>
                <div class="book_desc">
                  <div>单词数量：{{ tag.wordNum }}</div>
                  <div>
                    {{ (tag.reciteUserNum / 10000).toFixed(1) }} 万人在背
                  </div>
                </div>
                <div class="book_origin">
                  {{ tag.bookOrigin.desc }}:{{ tag.bookOrigin.originName }}
                </div>
              </template>
            </van-card>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // 当前选中的标签
      activeTagName: 0,
      // 当前标签每个子类高度数组
      tagHeights: [],
      // 页面当前高度
      currentHeight: 0
    }
  },
  mounted() {
    // 请求数据
    this.$store.dispatch('getBooksLists')
    // 监听鼠标滚动
    let timeId
    window.addEventListener(
      'scroll',
      () => {
        // 页面滚动停止100毫秒后才会执行下面的函数。
        clearTimeout(timeId)
        timeId = setTimeout(() => {
          this.handleScroll()
        }, 1000)
      },
      true
    )
  },
  methods: {
    // 导航插槽返回函数
    onClickLeft() {
      this.$router.go(-1)
    },
    // 点击标签获取当前标签每个子类高度数组
    clickGetTagHeight(name, title) {
      this.$nextTick(() => {
        const tagHeights = []
        let tagHeight = 0
        tagHeights.push(tagHeight)
        const div = this.$refs[title]
        const nodeLists = div[0].childNodes
        for (let i = 0; i < nodeLists.length; i++) {
          tagHeight += nodeLists[i].clientHeight
          tagHeights.push(tagHeight)
        }
        this.tagHeights = tagHeights
        this.currentHeight = this.tagHeights[0]
      })
    },
    // 点击当前标签子类滚动到子类高度
    clickScrollToTag(j) {
      this.currentHeight = this.tagHeights[j]
      window.scrollTo(0, this.tagHeights[j])
    },
    // 鼠标滚动回调函数
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.currentHeight = scrollTop + 130
    }
  },
  computed: {
    ...mapState(['booksLists']),
    // 计算当前index
    isCurrentIndex() {
      const { currentHeight, tagHeights } = this
      return tagHeights.findIndex((tagHeight, index) => {
        return (
          currentHeight >= tagHeight && currentHeight < tagHeights[index + 1]
        )
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-tabs__nav--complete {
  padding-right: 0px;
  padding-left: 0px;
}
.tagContainer {
  display: flex;
  flex-direction: row;
  background: #fff;
}
.tagContent {
  color: rgb(0, 0, 0);
  background: #c0c0c0;
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  height: 30px;
  width: 56px;
  line-height: 30px;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
}
.tagContent_on {
  color: rgb(255, 255, 255);
  background: #4169e1;
}
.book_tag {
  padding-top: 20px;
  font-size: 20px;
  padding-left: 5px;
  padding-bottom: 10px;
}
.book_title {
  font-size: 16px;
  margin-bottom: 15px;
}
.book_desc {
  color: #c0c0c0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 12px;
}
.book_origin {
  color: #c0c0c0;
  font-size: 14px;
}
</style>
