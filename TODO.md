Remove transport and create whole new website for transport and hamali!
For web on every button - Learn more, show on same page pop up menu with more information
const [showChild, setShowChild] = useState(false);
useEffect(() => {
setShowChild(true);
}, []);

if (!showChild) {
return null;
}
if (typeof window === "undefined") {
return <></>;
} else {
