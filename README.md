# Taiwan Better Select

Automatically grouping select options based on first character's phonetic symbol (Taiwanese).

## CDN

```
<script src="https://unpkg.com/tw-better-select@1.0.4/dist/tw-better-select.min.js"></script>
```

## Download compressed file

```
https://unpkg.com/tw-better-select@1.0.4/dist/tw-better-select.min.js.gz
```

## Example

```html
<html>
    <header>
        <title>Tw Better Select Demo</title>
    </header>
    <body>
        <select id="district" style="width: 120px">
            <option value="永和區">永和區</option>
            <option value="中和區" selected>中和區</option>
            <option value="金山區">金山區</option>
            <option value="板橋區">板橋區</option>
            <option value="汐止區">汐止區</option>
            <option value="深坑區">深坑區</option>
            <option value="石碇區">石碇區</option>
            <option value="瑞芳區">瑞芳區</option>
            <option value="平溪區">平溪區</option>
            <option value="土城區">土城區</option>
            <option value="三峽區">三峽區</option>
            <option value="樹林區">樹林區</option>
            <option value="鶯歌區">鶯歌區</option>
            <option value="三重區">三重區</option>
            <option value="新莊區">新莊區</option>
            <option value="泰山區">泰山區</option>
            <option value="蘆洲區">蘆洲區</option>
            <option value="林口區">林口區</option>
            <option value="五股區">五股區</option>
            <option value="八里區">八里區</option>
            <option value="淡水區">淡水區</option>
            <option value="三芝區">三芝區</option>
            <option value="石門區">石門區</option>
            <option value="雙溪區">雙溪區</option>
            <option value="貢寮區">貢寮區</option>
            <option value="新店區">新店區</option>
            <option value="坪林區">坪林區</option>
            <option value="烏來區">烏來區</option>
        </select>
    </body>
    <script src="https://unpkg.com/tw-better-select@1.0.4/dist/tw-better-select.min.js"></script>
    <script>
        // if statement is for backward compatibility since unpkg is not guarantee 100% uptime even though is is backed by CloudFlare
        if (typeof TwBetterSelect !== 'undefined') {
            const select = new TwBetterSelect('district');
        }
    </script>
</html>
```

Result:

![image](https://github.com/billyen2012/tw-better-select/blob/main/src/asset/demo.png?raw=true)

## Methods:

### 1. `refresh()`

options inside the select tag will be re-rendered. useful when you need to fetch options from remote resources or dynamically change the select options based other other configuration.

```js
const select = new TwBetterSelect('select-id');
select.refresh();
```

## Properties:

### 1. `optGroups`

a collection of nodes for option groups and the options for each of the group

```js
const select = new TwBetterSelect('select-id');
select.optGroups[0]; // this will be <optgroup></optgroup>
select.optGroups[0][0]; // this will be the <option></option> for child node of <optgroup></optgroup> above
```
