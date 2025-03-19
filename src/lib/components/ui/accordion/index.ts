import { Accordion as AccordionPrimitive } from "bits-ui";
import Content from "./accordion-content.svelte";
import Item from "./accordion-item.svelte";
import Trigger from "./accordion-trigger.svelte";
import FAQTrigger from "./accordion-trigger-faq.svelte";

const Root = AccordionPrimitive.Root;
export {
	Root,
	Content,
	Item,
	Trigger,
	FAQTrigger,
	//
	Root as Accordion,
	Content as AccordionContent,
	Item as AccordionItem,
	Trigger as AccordionTrigger,
	FAQTrigger as AccordionFAQTrigger,
};
