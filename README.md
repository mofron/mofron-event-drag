# mofron-event-drag
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

drag event for mofron

## event function parameter

- component: event target component object

- event: "mousemove" event object

- mixed: user specified parameter


# Install
```
npm install mofron mofron-event-drag
```

# Sample
```html
<setting>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-event-drag">Drag</tag>
</setting>

<script name=devt run=init>
    devt1.style({
        "left": (devt2.pageX - 50) + "px",
        "top": (devt2.pageY - 50) + "px"
    });
</script>

<Frame event=Drag:@devt style="position:relative;">
</Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|

