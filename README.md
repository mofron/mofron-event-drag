# mofron-event-drag
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

drag event for mofron

[handler parameter]<br>
- component: event target component object<br>
- event: "mousemove" event object<br>
- mixed: user specified parameter<br>

# Install
```
npm install mofron mofron-event-drag
```

# Sample
```html
<require>
    <tag module="mofron-comp-frame">Frame</tag>
    <tag module="mofron-event-drag">Drag</tag>
</require>

<script run=init>
let evt = (p1,p2) => {
    p1.style({
        "left": (p2.pageX - 50) + "px",
        "top": (p2.pageY - 50) + "px",
    });
};
</script>

<Frame event=Drag(evt) style="position:relative;"></Frame>
```
