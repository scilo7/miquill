import Miquill from "../index"
import m from "mithril"
import stream from "mithril/stream"

const docs = [
    {"attributes":{"size":"large","color":"#0066cc"},"insert":"Installation"},
    {"insert":"\nyarn add scilo7/miquill"},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"attributes":{"size":"large","color":"#0066cc"},"insert":"Usage"},
    {"insert":"\n"},
    {"insert":"You can pass two arguments to the component: an options object that is similiar to Quill options, and a stream that will store the editor's content as a Quill Delta\n"},
    {"insert":"import Miquill from \"miquill\""},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"import m from \"mithril\""},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"import stream from \"mithril/stream\""},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"const content = stream(null)"},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"const options = {"},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"   modules: {"},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"      toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block', 'image']],"},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"    },"},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"    theme: 'snow'"},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"}"},
    {"attributes":{"code-block":true},"insert":"\n\n"},
    {"insert":"const App = {"},
    {"attributes":{"code-block":true},"insert":"\n"},
    {"insert":"   view: () => m(Miquill, {options: options, content:content})"},
    {"attributes":{"code-block":true},"insert":"\n"},{"insert":"}"},
    {"attributes":{"code-block":true},"insert":"\n\n"},
    {"insert":"m.mount(document.getElementById('app'), App)"},
    {"attributes":{"code-block":true},"insert":"\n"}
]

const content = stream(docs)

const hello_world = stream([{"attributes":{"size":"large","color":"#0066cc"},"insert":"Hello World"}])

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block', 'image'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
]

const options = {
    modules: {
        toolbar: toolbarOptions,
    },
    theme: 'snow'
}

const App = {
    view: () => [
        m('h2.subtitle', 'Example'),
        m('div.hello', m(Miquill, {options: options, content: hello_world})),
        m('hr'),
        m('div.has-text-grey.is-size-7', "Serialized content = " + JSON.stringify(hello_world())),
        m('hr'),
        m('h2.subtitle', 'Documentation'),
        m('div.quill_container', 
            m(Miquill, 
                {
                    options: {readOnly: true, theme: 'snow'}, 
                    content: content
                }
            )
        ),
    ]
}

m.mount(document.getElementById('app'), App)