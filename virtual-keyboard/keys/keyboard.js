const KEY_CODE = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"],

    KEYS_SHOW_EN = ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
        'Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Delete',
        'CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',
        "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
    ],
    KEYS_SHOW_EN_CAPS = ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace',
        'Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", 'Delete',
        'CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', 'Enter',
        "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
    ],
    KEYS_SHOW_RUS = ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
        'Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", 'Delete',
        'CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter',
        "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
    ],
    KEYS_SHOW_RUS_CAPS = ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace',
        'Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", 'Delete',
        'CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter',
        "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
    ],
    KEY_WHICH = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17];

export default {
    KEY_CODE,
    KEYS_SHOW_EN,
    KEYS_SHOW_EN_CAPS,
    KEYS_SHOW_RUS,
    KEYS_SHOW_RUS_CAPS,
    KEY_WHICH
};