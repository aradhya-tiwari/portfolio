import { browser } from "$app/environment"

// export let _theme = $state("dark")
class _theme {
    theme = $state("")
    constructor() {
        if (browser) {
            this.theme = localStorage.getItem("theme") as string
        }

    }
    setTheme(thm: "light" | "dark") {
        this.theme = thm
        if (browser) {
            localStorage.setItem("theme", thm)
        }
    }
    getTheme() {
        return this.theme
    }
}

export let theme = new _theme()
