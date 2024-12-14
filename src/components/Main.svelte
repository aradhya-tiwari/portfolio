<script>
    import Down from "../assets/icons/downArrow.svg";

    let scrollDwn = $state(false);
    function scrollDown() {
        scrollDwn = true;
    }
    $effect(() => {
        if (scrollDwn) {
            console.log("Scrolling...");
            window.scrollBy(0, 10000);
            scrollDwn = false;
            console.log("scroll false");
        }
    });
</script>

<div class="w-full md:px-5 h-[60%]">
    <div class=" w-full md:w-[60%] mt-[50%] md:mt-[15%] m-auto">
        <div
            class="w-full text-center text-[2rem] md:text-[3rem] dark:text-white m-auto text-black"
        >
            <div class="text-center w-full">
                <p class="md:text-[3rem] text-[2rem] rounded">
                    Hi I am
                    <i class="font-thin"> Aradhya Tiwari </i>
                </p>
            </div>

            <i
                class="md:text-[3rem] text-[3rem] font-bold dark:bg-primary/50 bg-primaryDark/50 dark:text-primaryDark text-primary rounded px-2"
                >FullStack
            </i>

            Web App Developer with
            <br />
            <i
                class="md:text-[3rem] text-[3rem] font-bold w-fit my-1 dark:bg-primary/50 bg-primaryDark/50 dark:text-primaryDark text-primary rounded px-2"
            >
                Gen AI
            </i>
            in Mind
        </div>
    </div>
</div>
<img
    src={Down}
    alt=""
    srcset=""
    class="m-auto hover:scale-125 transition-all fill-white text-gray-300"
    onclick={scrollDown}
/>
