# miquill
A Quill component for Mithril

# Usage

```javascript
import Miquill from "miquill"
import m from "mithril"
import stream from "mithril/stream"

const content = stream(null)
const options = {theme: 'snow'}

m.mount(document.getElementById('app'), 
    { view: () => m(Miquill, {options: options, content: content}) }
)
```

See example and docs https://rawgit.com/scilo7/miquill/master/docs/index.html