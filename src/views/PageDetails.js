import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './PageDetails.css'

const data = {
    "id": "1000121",
    "title": "昆虫记",
    "rating": {
      "max": 10,
      "numRaters": 5131,
      "average": "8.6",
      "min": 0
    },
    "subtitle": "",
    "author": [
      "J.H.法布尔"
    ],
    "pubdate": "2004-03",
    "tags": [
      {
        "count": "1217",
        "name": "法布尔",
        "title": "法布尔"
      },
      {
        "count": "1084",
        "name": "科普",
        "title": "科普"
      },
      {
        "count": "819",
        "name": "自然",
        "title": "自然"
      },
      {
        "count": "765",
        "name": "昆虫记",
        "title": "昆虫记"
      },
      {
        "count": "611",
        "name": "昆虫",
        "title": "昆虫"
      },
      {
        "count": "602",
        "name": "自然科学",
        "title": "自然科学"
      },
      {
        "count": "521",
        "name": "法国",
        "title": "法国"
      },
      {
        "count": "445",
        "name": "生物",
        "title": "生物"
      }
    ],
    "origin_title": "",
    "image": "https://img3.doubanio.com/view/subject/m/public/s1921534.jpg",
    "binding": "平装",
    "translator": [
      "王光"
    ],
    "catalog": "目录<br>法布尔精神（再版序）<br>法布尔《昆虫记》（罗大冈初版序节录）<br>卷首语・致儿子汝勒<br>卷一<br>圣甲虫<br>登旺杜蜂<br>卷二<br>荒石园<br>卷三<br>肉体食粮与精神食粮<br>三种垒筑蜂<br>戳一下变形论<br>卷四<br>千条理论说道不如一个事实<br>天牛吃路<br>不同技艺的由来<br>卷五<br>食尸虫<br>埋粪虫与环境卫生<br>蝉和蚂蚁的寓言<br>蝉卵的遭遇<br>螳螂猎食<br>昆虫睡姿辨<br>卷六<br>西绪福斯虫与父性本能<br>潘帕斯草原食粪虫<br>绿螽斯<br>蟋蟀出世记<br>意大利蟋蟀<br>结串而行的松毛虫<br>卷七<br>装死<br>白蝎“自杀”<br>捉灯有感<br>坚果象<br>大孔雀蛾的晚会<br>卷八<br>丁香小教堂<br>隧蜂<br>卷九<br>我的小桌<br>朗格多克蝎的婚恋和家庭<br>胭脂虫<br>卷十<br>萤火虫备餐<br>对付菜青虫<br>说反常<br>金步甲的婚俗<br>童年忆事<br>附录<br>（1）《蝉和蚂蚁》（普罗旺斯语原文诗）<br>（2）《昆虫记》1－10卷原著目录总览<br>（3）法布尔传略<br>",
    "pages": "352",
    "images": {
      "small": "https://img3.doubanio.com/view/subject/s/public/s1921534.jpg",
      "large": "https://img3.doubanio.com/view/subject/l/public/s1921534.jpg",
      "medium": "https://img3.doubanio.com/view/subject/m/public/s1921534.jpg"
    },
    "alt": "https://book.douban.com/subject/1000121/",
    "publisher": "作家出版社",
    "isbn10": "7506312824",
    "isbn13": "9787506312820",
    "url": "https://api.douban.com/v2/book/1000121",
    "alt_title": "",
    "author_intro": "法布尔，全名若盎-昂利·卡西弥尔·法布尔，通常称作若盎-昂利·法布尔。 1823年12月22日，法布尔降生在法国南方阿韦龙省圣雷翁村一户农民家中。其父亲安杜瓦纳·法布尔能言善辩，好鸣不平；其母维克陶尔·萨尔格性情温顺，和蔼可亲。但他们是个山乡究户。人们曾法布尔是“昆虫观察家”，到晚年公认他为“昆虫学家”；他去世后，人们在一段时间里称他为“昆虫学家、作家”，后来又把他称为“作家、昆虫学家”。",
    "summary": "《昆虫记》是法国杰出昆虫学家、文学家法布尔的传世佳作，亦是一部不朽的著作。它熔作者毕生研究成果和人生感悟于一炉，以为性观照虫性，将昆虫世界化作供人类获得知识、趣味、美感和思想的美文一书以忠实于法文原著整体风貌及表达特色为选择原则， 让中国读者首次领略《昆虫记》的真实面目。",
    "price": "19.00",
    "ebook_price": null,
    "ebook_url": null,
    "series": null
  }
class PageDetails extends Component {
    static propTypes = {
        item: PropTypes.object,
        goBack: PropTypes.func,
    }
    renderBookDetails () {

    }
    renderMovieDetails () {

    }
    renderMusicDetails () {

    }

    render() {
        const { item, goBack } = this.props
        const { image, title, author, publisher, summary, catalog } = item
        return (
            <div className="detail-container">
                <div className="detail-header">
                    <div onClick={goBack} className="detail-header-back">{'< '}图书</div>
                    腾讯传
                </div>
                <div className="detail-banner">
                    <img src={image}/>
                    <div className="detail-desc">
                        <div>
                            <span>名称:</span>{title}
                        </div>
                        <div>
                            <span>作者:</span>{author.join('、')}
                        </div>
                        <div>
                            <span>出版社:</span>{publisher}
                        </div>
                    </div>
                </div>

                <div>
                    概述: {summary}
                </div>
                <div>
                    序言: {catalog}
                </div>
            </div>
        );
    }
}
