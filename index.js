import m from "mithril"
import Quill from "quill"


const Miquill = {

    oncreate: vnode => {
        const editor = new Quill(vnode.dom, vnode.attrs.options)
        if (vnode.attrs.content()){
            editor.setContents(vnode.attrs.content())
        }

        editor.on('text-change', function(delta, oldDelta, source) {
            vnode.attrs.content(editor.getContents().ops)
            m.redraw()
        })
    },

    view: () => m('div')
}

export default Miquill