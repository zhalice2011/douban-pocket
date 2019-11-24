import fetchJsonp from 'fetch-jsonp'
import TAB from '../constants/tab'

const TABLE = {
    [TAB.BOOK]: 'ke_coding_book',
    [TAB.MOVIE]: 'ke_coding_movie',
    [TAB.MUSIC]: 'ke_coding_music',
}

const _url = `http://sas.qq.com/cgi-bin/db/data?t=%5B%22ke_coding_book%22%5D&q=%7Bke_coding_book(_page:1,_limit:10,title:%22%E4%B8%89%E6%AF%9B%E6%B5%81%E6%B5%AA%E8%AE%B0%25%22)%7Bid,title,rating%7Bmax,numRaters,average,min%7D,subtitle,author,pubdate,tags%7Bcount,name,title%7D,origin_title,image,binding,translator,catalog,pages,images%7Bsmall,large,medium%7D,alt,publisher,isbn10,isbn13,url,alt_title,author_intro,summary,price,ebook_price,ebook_url,series%7Bid,title%7D%7D%7D`

const getUrl = (tab = TAB.BOOK, search = '', params = {}) => {
    const pre = 'http://sas.qq.com/cgi-bin/db/data?'
    const table = TABLE[tab]
    const { page = 1, limit = 10 } = params
    // (_page:1,_limit:10,title:"三毛流浪记%25")
    const query = `(_page:${page},_limit:${limit},title: "${search}%25")`
    switch (tab) {
        case TAB.BOOK: {
            return `${pre}t=%5B%22${table}%22%5D&q=%7B${table}${query}%7Bid,title,rating%7Bmax,numRaters,average,min%7D,subtitle,author,pubdate,tags%7Bcount,name,title%7D,origin_title,image,binding,translator,catalog,pages,images%7Bsmall,large,medium%7D,alt,publisher,isbn10,isbn13,url,alt_title,author_intro,summary,price,ebook_price,ebook_url,series%7Bid,title%7D%7D%7D`
        }
        case TAB.MOVIE: {
            return `http://sas.qq.com/cgi-bin/db/data?t=%5B%22ke_coding_movie%22%5D&q=%7Bke_coding_movie(_page:1,_limit:10,title:%22${search}%25%22)%7Bid,title,rating%7Bmax,average,stars,min,details%7Bscore_1,score_2,score_3,score_4,score_5%7D%7D,genres,casts%7Balt,avatars%7Bsmall,large,medium%7D,name,name_en,id%7D,durations,mainland_pubdate,pubdates,has_video,collect_count,original_title,subtype,directors%7Balt,avatars%7Bsmall,large,medium%7D,name,id%7D,year,images%7Bsmall,large,medium%7D,alt%7D%7D`
        }
        case TAB.MUSIC: {
            return `http://sas.qq.com/cgi-bin/db/data?t=%5B%22ke_coding_music%22%5D&q=%7Bke_coding_music(_page:1,_limit:10,title:%22${search}%25%22)%7Bid,title,alt,rating%7Bmax,average,numRaters,min%7D,author%7Bname%7D,alt_title,image,tags%7Bcount,name%7D,mobile_link,attrs%7Bpublisher,singer,version,pubdate,title,media,tracks,discs%7D%7D%7D`
        }
        default: break
    }

}

// tab 音乐 图书 电影
// search 用户输入的内容
// params { page limit }
const fetchJSON = (tab, search, params) => {
    const url = getUrl(tab, search, params)
    const pro = fetchJsonp(url, { timeout: 5000 })
        .then(res => {
            return res.json()
        })
        .then(res => {
            return res
        })
        .catch()

    return pro
}

export default fetchJSON
