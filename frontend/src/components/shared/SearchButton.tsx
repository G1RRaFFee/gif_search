import { ButtonHTMLAttributes, JSX } from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  className?: string;
}

const SearchButton = ({
  isLoading,
  className,
  ...props
}: SearchButtonProps): JSX.Element => {
  const _ = useTranslations("SearchButton");
  return (
    <Button {...props} disabled={isLoading} className={className}>
      {isLoading ? _("loading") : _("active")}
    </Button>
  );
};

export default SearchButton;
