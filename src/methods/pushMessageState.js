import emitter from '@/methods/emitter'

export default function (response, title = '更新') {
    if (response.data.success) {
        emitter.emit('push-message', {
            style: 'seccess',
            title: `${title}成功`
        })
    } else {
        const message = typeof response.data.message === 'string'
          ? [response.data.message] : response.data.message
        emitter.emit('push-message', {
            style: 'dager',
            title: `${title}失敗`,
            content: message.join('、')
        })
    }
}
