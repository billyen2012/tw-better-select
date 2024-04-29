import { TW_BETTER_SELECT } from './constant/TW_BETTER_SELECT'

export default class TwBetterSelect {
    /**
     *
     * @param {string} selectId
     * @param {{
     *  raw:boolean;
     * }} param1
     */
    constructor(selectId = '') {
        this.selectId = selectId
        /**
         * @private
         **/
        this.selectElement = document.getElementById(this.selectId)
        /**
         * @private
         * @type {HTMLOptGroupElement[]}
         **/
        this._optGroups = null
        this.render()
    }
    /**@private */
    render() {
        this.selectElement = document.getElementById(this.selectId)
        if (this.selectElement == null) {
            return
        }
        /**@type {HTMLOptionsCollection} */
        const optionsCollections = this.selectElement.options

        // 1. create an optionsMap based on the phonetic symbols of current options
        /**
         * @type {{
         *  [key:string]:{
         *    option:HTMLOptionElement;
         *    strokeCount:number;
         *    phonetic:string;
         *  }[]
         * }}
         **/
        const optionsMap = {}
        /**@type {HTMLOptionElement} */
        let selectedOption = null
        for (let option of optionsCollections) {
            const { innerText, selected } = option
            if (selected) {
                selectedOption = option
            }
            // start from max innerText to match to the dictionary e.g. 阿里山 -> 阿里 -> 阿
            textScannerLoop: for (let i = 0; i < innerText.length; i++) {
                const matchText = innerText.substring(0, innerText.length - i)
                /**@type {{phonetic:string[];strokeCount:number;}} */
                const matched = TW_BETTER_SELECT.dictionary[matchText]
                if (matched) {
                    const firstPhoneticSymbol = matched.phonetic[0][0]
                    if (!optionsMap[firstPhoneticSymbol]) {
                        optionsMap[firstPhoneticSymbol] = []
                    }
                    optionsMap[firstPhoneticSymbol].push({
                        ...matched,
                        strokeCount: parseInt(matched.strokeCount) || null,
                        option: option,
                    })
                    break textScannerLoop
                }
            }
        }

        // 2. create an node array for options groups to be replaced to the current select tag

        const optionsGroups = []
        // start scanning per order of tw phonetic symbols
        for (let phoneticSymbol of TW_BETTER_SELECT.TaiwanesePhoneticSymbols) {
            if (typeof optionsMap[phoneticSymbol] === 'undefined') {
                continue
            }

            // sort based on inner text
            optionsMap[phoneticSymbol].sort((a, b) =>
                a.option.innerText.localeCompare(b.option.innerText, 'zh-TW')
            )

            // create group
            const optGroup = document.createElement('optgroup')
            // add phoneticSymbol as label to the optgroup
            optGroup.label = phoneticSymbol
            optionsMap[phoneticSymbol].forEach(({ option }) => {
                optGroup.appendChild(option)
            })

            // push result optionsGroups arr
            optionsGroups.push(optGroup)
        }
        // replace select options elements in optionsGroups
        this.selectElement.replaceChildren(...optionsGroups)
        // reselect the pre selected option if there is any
        if (selectedOption) {
            this.selectElement.value = selectedOption.value
        }
        this._optGroups = optionsGroups
    }
    /**
     * will refresh the options. Useful when fetching options from a remote resources.
     *
     * ```js
     * const select = new TwBetterSelect("select-id");
     * select.refresh();
     * ```
     */
    refresh() {
        this.render()
    }
    /**
     * a collection of node for option groups and the options for each of the group
     *
     * ```js
     * const select = new TwBetterSelect("select-id");
     * select.optGroups[0]; // this will be <optgroup></optgroup>
     * select.optGroups[0][0]; // this will be the <option></option> for child node of <optgroup></optgroup> above
     * ```
     **/
    get optGroups() {
        return this._optGroups
    }
}
