import { StyleSheet, Dimensions } from 'react-native';

const COLORS = {
  primary: '#F0DEDF', 
  secondary: '#E9D6D7', 
  accent: '#FF6F61',  
  textPrimary: '#4A4A4A', 
  textSecondary: '#888888', 
  white: '#FFFFFF',
  black: '#000000',
  border: '#E0E0E0',   
  overlay: 'rgba(0,0,0,0.4)', 
};

const FONT_SIZES = {
  small: 12,
  medium: 14,
  large: 16,
  xl: 18,
  xxl: 24,
  xxxl: 28,
};

const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    padding: SPACING.md,
  },

  // --- Header ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.white, 
    borderBottomWidth: 0, 
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: '700',
    color: COLORS.textPrimary,
    flex: 1, 
    textAlign: 'center', 
  },
  headerIcon: {
    padding: SPACING.sm,
  },
  backButton: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.textSecondary,
    marginLeft: -SPACING.sm, 
  },
  menuButton: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.textSecondary,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 40, 
    justifyContent: 'flex-start',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 40, 
    justifyContent: 'flex-end',
    position: 'relative', 
  },
  
  headerTitleLeft: {
    textAlign: 'left',
    marginLeft: SPACING.sm,
  },

  // --- Cart Badge for Header ---
  cartBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: COLORS.accent,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.small - 2,
    fontWeight: 'bold',
  },

  // --- Home Screen ---
  homeContainer: {
    backgroundColor: COLORS.primary,
  },
  welcomeText: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginTop: SPACING.xl,
    marginBottom: SPACING.lg,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
  },
  categoryCard: {
    width: (Dimensions.get('window').width / 2) - (SPACING.md * 1.5), // Two cards per row with spacing
    height: 180,
    borderRadius: 12,
    marginBottom: SPACING.md,
    overflow: 'hidden', 
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'flex-end', 
    alignItems: 'flex-start', 
  },
  categoryImage: {
    ...StyleSheet.absoluteFillObject, 
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)', 
  },
  categoryText: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.white,
    padding: SPACING.sm,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    zIndex: 1,
  },


  // --- Product List Screens (Winter, Summer, Perfumes, Sale) ---
  subCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginBottom: SPACING.md,
  },
  subCategoryButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginHorizontal: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  activeSubCategory: {
    backgroundColor: COLORS.accent, 
    borderColor: COLORS.accent,
  },
  subCategoryText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  activeSubCategoryText: {
    color: COLORS.white, 
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
  },
  productCard: {
    width: (Dimensions.get('window').width / 2) - (SPACING.md * 1.5),
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  productImage: {
    width: '100%',
    height: 180, 
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productName: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginTop: SPACING.sm,
    paddingHorizontal: SPACING.sm,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: SPACING.xs,
    paddingHorizontal: SPACING.sm,
  },
  productPrice: {
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  originalPrice: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textSecondary,
    textDecorationLine: 'line-through',
    marginLeft: SPACING.xs,
  },
  addToCartButton: {
    backgroundColor: COLORS.accent, 
    paddingVertical: SPACING.sm,
    marginTop: SPACING.sm,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  addToCartButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
  },

  // --- Cart Screen ---
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: FONT_SIZES.large,
    color: COLORS.textSecondary,
  },
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderRadius: 12,
    marginBottom: SPACING.md,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: SPACING.md,
  },
  cartItemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cartItemName: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  cartItemPrice: {
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginTop: SPACING.xs,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.sm,
    backgroundColor: COLORS.secondary, 
    borderRadius: 8,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  quantityText: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    marginHorizontal: SPACING.sm,
    color: COLORS.textPrimary,
  },
  removeItemButton: {
    padding: SPACING.sm,
  },
  removeItemText: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.textSecondary,
  },
  cartTotalContainer: {
    padding: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cartTotalText: {
    fontSize: FONT_SIZES.xl,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  cartTotalPrice: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },

  // --- Modal Menu (from HomeScreen) ---
  menuContainer: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end', 
  },
  menuContent: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '70%', 
  },
  menuTitle: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: SPACING.lg,
    textAlign: 'center',
  },
  menuItem: {
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuItemText: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  closeButton: {
    marginTop: SPACING.xl,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.textPrimary,
    fontWeight: 'bold',
  },
});