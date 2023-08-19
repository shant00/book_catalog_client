import { useEffect } from "react";
import { useAppSelector } from "../redux/hook";

interface CartComponentProps {
    isOpen: boolean;
    onClose: () => void;
}
const CartComponent: React.FC<CartComponentProps> = ({ isOpen, onClose }) => {

    const { books } = useAppSelector((state) => state.cart);
    const cartItems = books
    // Close the cart when clicking anywhere outside
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const clickedElement = event.target as HTMLElement;
            if (isOpen && !clickedElement.closest(".cart-component")) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return (
        <div
            className={`mt-3 absolute top-8 right-0 bg-white border rounded shadow-md w-56 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
                }z-50 cart-component`}
        >
            <div className="p-2">
                <h2 className="text-lg font-semibold mb-2">Cart</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item._id} className="mb-2 flex items-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-6 h-6 mr-2 rounded-full"
                            />
                            <div>
                                <p>{item.title}</p>
                                <p className="text-sm text-gray-600">${item.genre}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CartComponent;
