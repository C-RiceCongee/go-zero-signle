// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"go-zero-single/app/models/models"
)

func newRecipeCategory(db *gorm.DB, opts ...gen.DOOption) recipeCategory {
	_recipeCategory := recipeCategory{}

	_recipeCategory.recipeCategoryDo.UseDB(db, opts...)
	_recipeCategory.recipeCategoryDo.UseModel(&models.RecipeCategory{})

	tableName := _recipeCategory.recipeCategoryDo.TableName()
	_recipeCategory.ALL = field.NewAsterisk(tableName)
	_recipeCategory.ID = field.NewInt32(tableName, "id")
	_recipeCategory.CategoryID = field.NewInt64(tableName, "category_id")
	_recipeCategory.CategoryName = field.NewString(tableName, "category_name")
	_recipeCategory.CategoryDescription = field.NewString(tableName, "category_description")
	_recipeCategory.ParentCategoryID = field.NewInt64(tableName, "parent_category_id")
	_recipeCategory.Status = field.NewInt32(tableName, "status")
	_recipeCategory.CreateTime = field.NewTime(tableName, "create_time")
	_recipeCategory.UpdateTime = field.NewTime(tableName, "update_time")

	_recipeCategory.fillFieldMap()

	return _recipeCategory
}

type recipeCategory struct {
	recipeCategoryDo

	ALL                 field.Asterisk
	ID                  field.Int32 // 主键为自增的id
	CategoryID          field.Int64
	CategoryName        field.String
	CategoryDescription field.String
	ParentCategoryID    field.Int64
	Status              field.Int32 // 状态[-1:删除;0:禁用;1启用]
	CreateTime          field.Time  // 数据创建时间
	UpdateTime          field.Time  // 数据更新时间

	fieldMap map[string]field.Expr
}

func (r recipeCategory) Table(newTableName string) *recipeCategory {
	r.recipeCategoryDo.UseTable(newTableName)
	return r.updateTableName(newTableName)
}

func (r recipeCategory) As(alias string) *recipeCategory {
	r.recipeCategoryDo.DO = *(r.recipeCategoryDo.As(alias).(*gen.DO))
	return r.updateTableName(alias)
}

func (r *recipeCategory) updateTableName(table string) *recipeCategory {
	r.ALL = field.NewAsterisk(table)
	r.ID = field.NewInt32(table, "id")
	r.CategoryID = field.NewInt64(table, "category_id")
	r.CategoryName = field.NewString(table, "category_name")
	r.CategoryDescription = field.NewString(table, "category_description")
	r.ParentCategoryID = field.NewInt64(table, "parent_category_id")
	r.Status = field.NewInt32(table, "status")
	r.CreateTime = field.NewTime(table, "create_time")
	r.UpdateTime = field.NewTime(table, "update_time")

	r.fillFieldMap()

	return r
}

func (r *recipeCategory) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := r.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (r *recipeCategory) fillFieldMap() {
	r.fieldMap = make(map[string]field.Expr, 8)
	r.fieldMap["id"] = r.ID
	r.fieldMap["category_id"] = r.CategoryID
	r.fieldMap["category_name"] = r.CategoryName
	r.fieldMap["category_description"] = r.CategoryDescription
	r.fieldMap["parent_category_id"] = r.ParentCategoryID
	r.fieldMap["status"] = r.Status
	r.fieldMap["create_time"] = r.CreateTime
	r.fieldMap["update_time"] = r.UpdateTime
}

func (r recipeCategory) clone(db *gorm.DB) recipeCategory {
	r.recipeCategoryDo.ReplaceConnPool(db.Statement.ConnPool)
	return r
}

func (r recipeCategory) replaceDB(db *gorm.DB) recipeCategory {
	r.recipeCategoryDo.ReplaceDB(db)
	return r
}

type recipeCategoryDo struct{ gen.DO }

func (r recipeCategoryDo) Debug() *recipeCategoryDo {
	return r.withDO(r.DO.Debug())
}

func (r recipeCategoryDo) WithContext(ctx context.Context) *recipeCategoryDo {
	return r.withDO(r.DO.WithContext(ctx))
}

func (r recipeCategoryDo) ReadDB() *recipeCategoryDo {
	return r.Clauses(dbresolver.Read)
}

func (r recipeCategoryDo) WriteDB() *recipeCategoryDo {
	return r.Clauses(dbresolver.Write)
}

func (r recipeCategoryDo) Session(config *gorm.Session) *recipeCategoryDo {
	return r.withDO(r.DO.Session(config))
}

func (r recipeCategoryDo) Clauses(conds ...clause.Expression) *recipeCategoryDo {
	return r.withDO(r.DO.Clauses(conds...))
}

func (r recipeCategoryDo) Returning(value interface{}, columns ...string) *recipeCategoryDo {
	return r.withDO(r.DO.Returning(value, columns...))
}

func (r recipeCategoryDo) Not(conds ...gen.Condition) *recipeCategoryDo {
	return r.withDO(r.DO.Not(conds...))
}

func (r recipeCategoryDo) Or(conds ...gen.Condition) *recipeCategoryDo {
	return r.withDO(r.DO.Or(conds...))
}

func (r recipeCategoryDo) Select(conds ...field.Expr) *recipeCategoryDo {
	return r.withDO(r.DO.Select(conds...))
}

func (r recipeCategoryDo) Where(conds ...gen.Condition) *recipeCategoryDo {
	return r.withDO(r.DO.Where(conds...))
}

func (r recipeCategoryDo) Order(conds ...field.Expr) *recipeCategoryDo {
	return r.withDO(r.DO.Order(conds...))
}

func (r recipeCategoryDo) Distinct(cols ...field.Expr) *recipeCategoryDo {
	return r.withDO(r.DO.Distinct(cols...))
}

func (r recipeCategoryDo) Omit(cols ...field.Expr) *recipeCategoryDo {
	return r.withDO(r.DO.Omit(cols...))
}

func (r recipeCategoryDo) Join(table schema.Tabler, on ...field.Expr) *recipeCategoryDo {
	return r.withDO(r.DO.Join(table, on...))
}

func (r recipeCategoryDo) LeftJoin(table schema.Tabler, on ...field.Expr) *recipeCategoryDo {
	return r.withDO(r.DO.LeftJoin(table, on...))
}

func (r recipeCategoryDo) RightJoin(table schema.Tabler, on ...field.Expr) *recipeCategoryDo {
	return r.withDO(r.DO.RightJoin(table, on...))
}

func (r recipeCategoryDo) Group(cols ...field.Expr) *recipeCategoryDo {
	return r.withDO(r.DO.Group(cols...))
}

func (r recipeCategoryDo) Having(conds ...gen.Condition) *recipeCategoryDo {
	return r.withDO(r.DO.Having(conds...))
}

func (r recipeCategoryDo) Limit(limit int) *recipeCategoryDo {
	return r.withDO(r.DO.Limit(limit))
}

func (r recipeCategoryDo) Offset(offset int) *recipeCategoryDo {
	return r.withDO(r.DO.Offset(offset))
}

func (r recipeCategoryDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *recipeCategoryDo {
	return r.withDO(r.DO.Scopes(funcs...))
}

func (r recipeCategoryDo) Unscoped() *recipeCategoryDo {
	return r.withDO(r.DO.Unscoped())
}

func (r recipeCategoryDo) Create(values ...*models.RecipeCategory) error {
	if len(values) == 0 {
		return nil
	}
	return r.DO.Create(values)
}

func (r recipeCategoryDo) CreateInBatches(values []*models.RecipeCategory, batchSize int) error {
	return r.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (r recipeCategoryDo) Save(values ...*models.RecipeCategory) error {
	if len(values) == 0 {
		return nil
	}
	return r.DO.Save(values)
}

func (r recipeCategoryDo) First() (*models.RecipeCategory, error) {
	if result, err := r.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*models.RecipeCategory), nil
	}
}

func (r recipeCategoryDo) Take() (*models.RecipeCategory, error) {
	if result, err := r.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*models.RecipeCategory), nil
	}
}

func (r recipeCategoryDo) Last() (*models.RecipeCategory, error) {
	if result, err := r.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*models.RecipeCategory), nil
	}
}

func (r recipeCategoryDo) Find() ([]*models.RecipeCategory, error) {
	result, err := r.DO.Find()
	return result.([]*models.RecipeCategory), err
}

func (r recipeCategoryDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.RecipeCategory, err error) {
	buf := make([]*models.RecipeCategory, 0, batchSize)
	err = r.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (r recipeCategoryDo) FindInBatches(result *[]*models.RecipeCategory, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return r.DO.FindInBatches(result, batchSize, fc)
}

func (r recipeCategoryDo) Attrs(attrs ...field.AssignExpr) *recipeCategoryDo {
	return r.withDO(r.DO.Attrs(attrs...))
}

func (r recipeCategoryDo) Assign(attrs ...field.AssignExpr) *recipeCategoryDo {
	return r.withDO(r.DO.Assign(attrs...))
}

func (r recipeCategoryDo) Joins(fields ...field.RelationField) *recipeCategoryDo {
	for _, _f := range fields {
		r = *r.withDO(r.DO.Joins(_f))
	}
	return &r
}

func (r recipeCategoryDo) Preload(fields ...field.RelationField) *recipeCategoryDo {
	for _, _f := range fields {
		r = *r.withDO(r.DO.Preload(_f))
	}
	return &r
}

func (r recipeCategoryDo) FirstOrInit() (*models.RecipeCategory, error) {
	if result, err := r.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*models.RecipeCategory), nil
	}
}

func (r recipeCategoryDo) FirstOrCreate() (*models.RecipeCategory, error) {
	if result, err := r.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*models.RecipeCategory), nil
	}
}

func (r recipeCategoryDo) FindByPage(offset int, limit int) (result []*models.RecipeCategory, count int64, err error) {
	result, err = r.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = r.Offset(-1).Limit(-1).Count()
	return
}

func (r recipeCategoryDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = r.Count()
	if err != nil {
		return
	}

	err = r.Offset(offset).Limit(limit).Scan(result)
	return
}

func (r recipeCategoryDo) Scan(result interface{}) (err error) {
	return r.DO.Scan(result)
}

func (r recipeCategoryDo) Delete(models ...*models.RecipeCategory) (result gen.ResultInfo, err error) {
	return r.DO.Delete(models)
}

func (r *recipeCategoryDo) withDO(do gen.Dao) *recipeCategoryDo {
	r.DO = *do.(*gen.DO)
	return r
}
