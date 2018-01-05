# miquill
A Quill component for Mithril

# Usage

```javascript
import Miquill from "../index"
import m from "mithril"
import stream from "mithril/stream"

const content = stream(null)
const options = {theme: 'snow'}

m.mount(document.getElementById('app'), 
    { view: () => m(Miquill, {options: options, content: content}) }
)
```