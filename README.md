# sdk

```javascript
<script>
  (function () {
   
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://tafalo.com/sdk.min.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  })();

  // execute your script immediately here
  window.tfl =  new Tfl('idapp');
</script>
```

