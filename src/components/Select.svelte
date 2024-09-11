<script lang="ts">
    import * as DropdownMenu from "$/components/ui/dropdown-menu";
    import { categoryName, type Category } from "../api/schema/category";

    export let options: Category[];
    export let value: Category | undefined;
    export let defaultValue: Category;

    let select: HTMLSelectElement;

    const handleChange = () => {
        value = select.value as Category;
    };
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger
        class="font-mc-mono bg-dark-3 p-5 pt-1.5 pb-1.5 rd-lg b-1 b-transparent b-solid hover:bg-dark-2 transition-all transition-duration-250 hover:border-cwhite text-lg"
        >{categoryName(value || defaultValue)}</DropdownMenu.Trigger
    >
    <DropdownMenu.Content class="bg-dark-3">
        <DropdownMenu.RadioGroup bind:value class="bg-dark-3">
            {#each options as opt}
                <DropdownMenu.RadioItem
                    value={opt}
                    class="color-white hover:bg-dark-5 transition-all transition-duration-250 hover:color-white cursor-pointer font-mc-mono"
                    >{categoryName(opt)}</DropdownMenu.RadioItem
                >
            {/each}
        </DropdownMenu.RadioGroup>
    </DropdownMenu.Content>
</DropdownMenu.Root>
